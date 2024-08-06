<template>
	<div
		class="flex flex-row items-center justify-between bg-red-550 h-[8%] px-6 py-[1%] border-t-2 border-t-white">
		<div class="flex flex-row items-center">
			<button
				class="flex flex-col justify-center items-center w-fit pe-6"
				type="button"
				@click="toggleDrawer">
				<div
					class="rounded-3xl w-14 h-16 mb-2 flex justify-center items-center bg-white text-red-550">
					<Icon height="48" icon="iconamoon:arrow-up-2-bold" />
				</div>
				<div class="text-lg text-white hind-semibold">Meu Pedido</div>
			</button>

			<div
				class="py-3 px-7 h-fit cursor-pointer border border-white text-white rounded-lg w-fit flex justify-center items-center"
				@click="cancelOrder">
				<div class="leading-4 hind-regular text-lg pt-1">
					Abandonar pedido
				</div>
			</div>
		</div>

		<div class="flex flex-row items-center">
			<div class="text-2xl text-white hind-semibold me-8">
				{{ itemsCount }} Item{{ itemsCount > 1 ? "s" : "" }}
			</div>

			<router-link
				to="costumer-identification"
				class="py-6 px-4 rounded-3xl mb-2 flex justify-between items-center bg-white text-red-550">
				<div class="leading-4 hind-medium text-3xl pt-1 me-10">
					Confirmar
				</div>
				<div class="leading-4 hind-medium text-3xl pt-1">
					{{
						totalCartPrice.toLocaleString("pt-BR", {
							minimumFractionDigits: 2,
							style: "currency",
							currency: "BRL",
						})
					}}
				</div>
			</router-link>
		</div>

		<!-- Product Drawer -->
		<transition name="slide-up">
			<div
				v-if="isDrawerOpen"
				id="drawer-bottom-example"
				class="fixed bottom-0 left-0 right-0 h-[85.5%] z-40 w-full p-4 px-16 overflow-y-auto transition-transform bg-white transform-none"
				tabindex="-1"
				aria-labelledby="drawer-bottom-label">
				<div class="relative h-full">
					<div class="hind-regular w-fit text-4xl leading-7 pt-1">
						Confira seu pedido - 1 item
					</div>

					<template v-for="item in cartStore.cartItems">
						<div class="py-4 flex items-center justify-between">
							<div class="flex items-center me-8">
								<div class="flex items-center me-8">
									<button
										class="rounded-xl bg-white w-10 h-10 flex justify-center items-center cursor-pointer drop-shadow-md"
										@click="
											() => handleRemoveProduct(item)
										">
										<Icon
											height="33"
											icon="material-symbols-light:remove" />
									</button>

									<div
										class="hind-regular text-2xl mx-4 leading-4 pt-2">
										{{ item.quantity }}
									</div>

									<button
										class="rounded-xl bg-red-650 w-10 h-10 flex justify-center items-center text-white cursor-pointer drop-shadow-md"
										@click="() => handleAddProduct(item)">
										<Icon
											height="33"
											icon="material-symbols-light:add" />
									</button>
								</div>

								<div class="hind-regular text-3xl">
									{{ item.product.name }}
								</div>
							</div>
							<div class="hind-semibold text-3xl text-red-550">
								{{
									item.product.price.toLocaleString("pt-BR", {
										minimumFractionDigits: 2,
										style: "currency",
										currency: "BRL",
									})
								}}
							</div>
						</div>

						<div class="flex items-center justify-between">
							<div></div>
							<div class="grid grid-cols-2 gap-4">
								<div
									v-for="removableItem in item.removableItems"
									class="rounded-2xl hind-regular leading-3 text-lg px-6 pb-2 pt-3 bg-gray-350 flex justify-center items-center cursor-pointer">
									Remover {{ removableItem.name }}
								</div>
								<div
									v-for="addableItem in item.addableItems"
									class="rounded-2xl hind-regular leading-3 text-lg px-6 pb-2 pt-3 bg-gray-350 flex justify-center items-center cursor-pointer">
									{{ addableItem.name }}
									{{
										(
											addableItem.price *
											addableItem.quantity
										).toLocaleString("pt-BR", {
											minimumFractionDigits: 2,
											style: "currency",
											currency: "BRL",
										})
									}}
								</div>
							</div>
							<router-link
								:to="{
									name: 'ProductComplements',
									params: { id: item.product.id },
								}"
								class="rounded-xl hind-medium leading-3 text-lg px-6 py-4 bg-red-550 text-white flex justify-center items-center cursor-pointer">
								Editar
							</router-link>
						</div>
					</template>

					<div class="absolute bottom-0 w-full">
						<div class="text-red-550 text-end w-full mb-12">
							<span class="hind-regular text-2xl me-6">
								Total
							</span>
							<span class="hind-medium text-5xl">
								{{
									totalCartPrice.toLocaleString("pt-BR", {
										minimumFractionDigits: 2,
										style: "currency",
										currency: "BRL",
									})
								}}
							</span>
						</div>
						<div class="grid grid-cols-2 gap-8">
							<button
								class="rounded-3xl hind-medium leading-3 text-3xl py-6 flex justify-center items-center cursor-pointer bg-white drop-shadow-md"
								@click="toggleDrawer">
								<Icon
									height="33"
									icon="material-symbols-light:arrow-back-ios-new"
									class="absolute start-0 mx-2" />
								Continuar comprando
							</button>
							<router-link
								to="costumer-identification"
								class="rounded-3xl hind-medium leading-3 text-3xl text-white py-6 flex justify-center items-center cursor-pointer bg-red-550 drop-shadow-md">
								Ir para pagamento
								<Icon
									height="33"
									icon="material-symbols:arrow-forward-rounded"
									class="ms-4" />
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { CartItem, useCartStore } from "../../stores/CartStore";
import { getItemPrice } from "../../helpers/MathHelpers";

const router = useRouter();
const cartStore = useCartStore();

const isDrawerOpen = ref(false);

const itemsCount = cartStore.cartItems.length;

const handleAddProduct = (item: CartItem) => {
	cartStore.updateCartItem(item.product.id, {
		...item,
		quantity: item.quantity + 1,
	});
};

const handleRemoveProduct = (item: CartItem) => {
	if (item.quantity === 1) {
		cartStore.removeProductFromCart(item.product.id);
	} else {
		cartStore.updateCartItem(item.product.id, {
			...item,
			quantity: item.quantity - 1,
		});
	}
};

const totalCartPrice = computed(() =>
	cartStore.cartItems.reduce((acc, item) => {
		return acc + getItemPrice(item);
	}, 0)
);

const toggleDrawer = () => {
	isDrawerOpen.value = !isDrawerOpen.value;
};

const cancelOrder = () => {
	cartStore.clearCart();
	router.push({ name: "IdlePage" });
};
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
	transition: transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
	transform: translateY(100%);
}
</style>
