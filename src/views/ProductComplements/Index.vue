<template>
	<div class="h-screen w-screen bg-white">
		<Header />

		<div class="flex items-center mt-5 mx-8">
			<div
				class="py-1 ps-3 pe-4 me-5 cursor-pointer border rounded-2xl w-fit flex justify-center items-center"
				@click="goBack">
				<Icon
					height="33"
					icon="material-symbols-light:arrow-back-ios-new"
					class="pe-2" />
				<div class="leading-4 hind-regular text-lg pt-1">Voltar</div>
			</div>

			<div class="hind-regular w-fit text-4xl leading-7 pt-1">
				{{ product?.name }}
			</div>
		</div>

		<div class="h-[30%] flex justify-center rounded relative">
			<SpinnerComponent
				v-if="imageLoading"
				class="absolute inset-0 m-auto" />
			<img
				v-if="product?.imageUrl"
				:src="product?.imageUrl"
				alt="Product Image"
				class="h-[100%] mt-2 rounded object-cover"
				@load="imageLoading = false"
				@error="imageLoading = false" />
		</div>

		<div class="mx-10 pb-2 mb-8 border-b border-stone-350">
			<div class="hind-regular w-fit text-2xl leading-7 mb-8">
				{{ product?.description }}
			</div>
			<div class="flex justify-end">
				<div class="hind-semibold text-red-550 text-3xl">
					{{
						product?.price.toLocaleString("pt-BR", {
							minimumFractionDigits: 2,
							style: "currency",
							currency: "BRL",
						})
					}}
				</div>
			</div>
		</div>

		<div class="mx-16">
			<template v-if="stage === 'removableItems'">
				<div class="hind-regular text-red-550 text-3xl mb-8">
					Deseja remover algo do seu Burger? ({{
						selectedRemovableItemsCount
					}}/{{ removableItemsCount }})
				</div>

				<div class="grid grid-cols-2 gap-8 mb-8">
					<template v-for="removableItem in product?.removableItems">
						<div
							class="bg-white rounded-lg drop-shadow-md py-4 px-8 cursor-pointer relative"
							@click="handleSelectRemovableItem(removableItem)">
							<div class="hind-regular text-lg">
								Remover {{ removableItem.name }}
							</div>
							<div
								class="rounded-full w-10 h-10 flex justify-center items-center bg-red-650 text-white absolute -right-4 -top-4"
								v-if="
									selectedRemovableItems.find(
										(r) => r.id === removableItem.id
									)
								">
								<Icon
									height="33"
									icon="material-symbols-light:check" />
							</div>
						</div>
					</template>
				</div>
			</template>
			<template v-else>
				<div class="hind-regular text-red-550 text-3xl mb-8">
					Que tal turbinar seu Burger? ({{
						selectedAddableItemsCount
					}}/{{ addableItemsCount }})
				</div>

				<div class="grid grid-cols-2 gap-8 mb-8">
					<template v-for="addableItem in product?.addableItems">
						<div
							class="bg-white rounded-lg drop-shadow-md py-4 px-8 relative">
							<div class="hind-regular text-lg">
								{{ addableItem.name }}
								<span class="text-red-550">
									{{
										addableItem.price.toLocaleString(
											"pt-BR",
											{
												minimumFractionDigits: 2,
												style: "currency",
												currency: "BRL",
											}
										)
									}}
								</span>
							</div>
							<div
								class="absolute right-0 top-0 h-full flex items-center px-4">
								<div
									class="rounded-full w-10 h-10 flex justify-center items-center border-2 cursor-pointer"
									@click="
										handleRemoveAddableItem(addableItem)
									">
									<Icon
										height="33"
										icon="material-symbols-light:remove" />
								</div>
								<div class="hind-regular text-xl mx-2">
									{{
										selectedAddableItems.find(
											(item) => item.id === addableItem.id
										)?.quantity ?? 0
									}}
								</div>
								<div
									class="rounded-full w-10 h-10 flex justify-center items-center bg-red-650 text-white cursor-pointer"
									@click="
										handleSelectAddableItem(addableItem)
									">
									<Icon
										height="33"
										icon="material-symbols-light:add" />
								</div>
							</div>
						</div>
					</template>
				</div>
			</template>

			<div
				class="bg-white rounded-lg drop-shadow-md py-2 ps-8 pe-0 mx-4 flex justify-between items-center">
				<div class="hind-semibold text-2xl leading-3">
					1 x
					{{
						totalValue.toLocaleString("pt-BR", {
							minimumFractionDigits: 2,
							style: "currency",
							currency: "BRL",
						})
					}}
				</div>
				<div
					class="py-4 px-8 me-2 cursor-pointer border rounded-3xl w-fit flex justify-center items-center bg-red-650 text-white"
					@click="handleClickNext">
					<div class="leading-4 hind-regular text-3xl pt-1 px-16">
						Próximo
					</div>
					<Icon
						height="33"
						icon="material-symbols-light:arrow-forward-ios-rounded" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
	ProductAddableItem,
	ProductRemovableItem,
	useProductStore,
} from "../../stores/ProductStore";
import Header from "../../components/Header.vue";
import SpinnerComponent from "../../components/SpinnerComponent.vue";
import { Icon } from "@iconify/vue";
import { CartAddableItem, useCartStore } from "../../stores/CartStore";
import { toast } from "vue3-toastify";
import { AppException } from "../../main";
import { useFlashStore } from "../../stores/FlashStore";

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const productStore = useProductStore();
const flashStore = useFlashStore();

const productId = ref(Number(route.params.id));
const totalValue = ref();

const stage = ref<"removableItems" | "addableItems">("removableItems");

const product = computed(() => {
	const product = productStore.products.find((p) => p.id === productId.value);
	const cartProduct = cartStore.cartItems.find(
		(p) => p.product.id === productId.value
	);

	if (!product) {
		router.push({ name: "Dashboard" });
		return undefined;
	}

	if (cartProduct) {
		selectedRemovableItems.value = cartProduct.removableItems;
		selectedAddableItems.value = cartProduct.addableItems;
	}

	totalValue.value = product.price;

	return product;
});

const selectedRemovableItems = ref<ProductRemovableItem[]>([]);
const selectedAddableItems = ref<CartAddableItem[]>([]);

const removableItemsCount = computed(() => {
	return product.value?.removableItems.length;
});

const addableItemsCount = computed(() => {
	return product.value?.addableItems.length;
});

const selectedRemovableItemsCount = computed(() => {
	return selectedRemovableItems.value.length;
});

const selectedAddableItemsCount = computed(() => {
	return selectedAddableItems.value.length;
});

const handleSelectRemovableItem = (removableItem: ProductRemovableItem) => {
	const removableItemIndex = selectedRemovableItems.value.findIndex(
		(item) => item.id === removableItem.id
	);

	if (removableItemIndex === -1) {
		selectedRemovableItems.value.push(removableItem);
	} else {
		selectedRemovableItems.value.splice(removableItemIndex, 1);
	}
};

const handleSelectAddableItem = (addableItem: ProductAddableItem) => {
	totalValue.value += addableItem.price;

	const previousItem = selectedAddableItems.value.find(
		(item) => item.id === addableItem.id
	);

	if (previousItem) {
		selectedAddableItems.value = selectedAddableItems.value.map((item) =>
      item.id === addableItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
	} else {
		selectedAddableItems.value.push({
			...addableItem,
			quantity: 1,
		});
	}
};

const handleRemoveAddableItem = (addableItem: ProductAddableItem) => {
  const previousItem = selectedAddableItems.value.find(
    (item) => item.id === addableItem.id
  );

  if(!previousItem) return;

	const addableItemIndex = selectedAddableItems.value.findIndex(
		(item) => item.id === addableItem.id
	);

	totalValue.value -= addableItem.price;


	if (previousItem?.quantity > 1) {
		selectedAddableItems.value = selectedAddableItems.value.map((item) =>
      item.id === addableItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
	} else {
    selectedAddableItems.value.splice(addableItemIndex, 1);
	}

};

const imageLoading = ref(true);

const handleClickNext = () => {
	try {
		if (stage.value === "removableItems") {
			return (stage.value = "addableItems");
		}

		if (!product.value) throw new AppException("Produto não encontrado.");

		const itemInCart = cartStore.cartItems.find(
			(item) => item.product.id === product.value?.id
		);

		itemInCart
			? cartStore.updateCartItem(product.value.id, {
					...itemInCart,
					removableItems: selectedRemovableItems.value,
					addableItems: selectedAddableItems.value,
			  })
			: cartStore.addProductToCart(
					product.value,
					selectedRemovableItems.value,
					selectedAddableItems.value,
					1
			  );

		flashStore.addMessage({
			message: `<h1>1x ${product.value.name}</h1><h2>adicionado ao pedido</h2>`,
			type: "success",
			options: { dangerouslyHTMLString: true },
		});

		router.push({ name: "Dashboard" });
	} catch (error) {
		console.error(error);
		error instanceof AppException
			? toast.error(error.message)
			: toast.error(
					"Ocorreu um erro ao tentar adicionar o item ao carrinho."
			  );
	}
};

const goBack = () => {
	router.push({ name: "Dashboard" });
};
</script>
