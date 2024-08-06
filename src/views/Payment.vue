<template>
	<div class="h-screen w-screen bg-white pt-80">
		<div
			class="flex justify-end gap-1 md:gap-2 w-screen p-[2%] absolute top-0 end-0">
			<CountryList />
		</div>

		<div class="hind-regular w-fit text-5xl leading-7 pb-28 px-12">
			Dados de pagamento
		</div>

		<div class="px-12 pb-8">
			<div class="hind-regular w-fit text-4xl leading-7 pb-6">
				Qual o seu nome?
			</div>
			<input
				v-model="customerStore.costumerName"
				class="hind-regular w-fit text-6xl leading-3 text-red-550 mb-6" />
			<SimpleKeyboard
				:input="customerStore.costumerName"
				v-if="customerStore.showNameInput"
				keyboardClass="simple-keyboard"
				@onChange="(value) => updateInput(value, 'name')" />
		</div>

		<div class="grid grid-cols-2 gap-y-6 gap-x-4 px-12 pb-8">
			<div
				class="bg-white rounded-lg drop-shadow-md border py-7 px-8 cursor-pointer relative overflow-hidden aria-selected:border-red-550 aria-selected:border-2"
				@click="() => (paymentMethod = 'credit')"
				:aria-selected="!!(paymentMethod === 'credit')">
				<div class="hind-medium text-3xl">Crédito</div>
				<img
					src="../assets/carts/blueCart.png"
					alt="Product Image"
					class="h-[110%] object-cover absolute end-0 top-1/2 transform -translate-y-1/2 pt-2" />
			</div>
			<div
				class="bg-white rounded-lg drop-shadow-md border py-7 px-8 cursor-pointer relative overflow-hidden aria-selected:border-red-550 aria-selected:border-2"
				@click="() => (paymentMethod = 'debit')"
				:aria-selected="paymentMethod === 'debit'">
				<div class="hind-medium text-3xl">Débito</div>
				<img
					src="../assets/carts/yellowCart.png"
					alt="Product Image"
					class="h-[110%] object-cover absolute end-0 top-1/2 transform -translate-y-1/2 pt-2" />
			</div>
			<div
				class="bg-white rounded-lg drop-shadow-md border py-7 px-8 cursor-pointer relative overflow-hidden aria-selected:border-red-550 aria-selected:border-2"
				@click="() => (paymentMethod = 'voucher')"
				:aria-selected="paymentMethod === 'voucher'">
				<div class="hind-medium text-3xl">Voucher</div>
				<img
					src="../assets/carts/purpleCart.png"
					alt="Product Image"
					class="h-[110%] object-cover absolute end-0 top-1/2 transform -translate-y-1/2 pt-2" />
			</div>
			<div
				class="bg-white rounded-lg drop-shadow-md border py-7 px-8 cursor-pointer relative overflow-hidden aria-selected:border-red-550 aria-selected:border-2"
				@click="() => (paymentMethod = 'pix')"
				:aria-selected="paymentMethod === 'pix'">
				<div class="hind-medium text-3xl">PIX</div>
				<img
					src="../assets/carts/qrCode.png"
					alt="Product Image"
					class="h-[100%] object-cover absolute end-0 top-1/2 transform -translate-y-1/2 p-2" />
			</div>
			<div
				class="bg-white rounded-lg drop-shadow-md border py-7 px-8 cursor-pointer relative overflow-hidden aria-selected:border-red-550 aria-selected:border-2"
				@click="() => (paymentMethod = 'money')"
				:aria-selected="paymentMethod === 'money'">
				<div class="hind-medium text-3xl">Dinheiro</div>
				<img
					src="../assets/carts/money.png"
					alt="Product Image"
					class="h-[100%] object-cover absolute end-0 top-1/2 transform -translate-y-1/2 p-1 pe-3" />
			</div>
		</div>

		<div class="absolute bottom-0 w-full px-12 pb-6">
			<div class="grid grid-cols-2 gap-8">
				<button
					class="rounded-3xl hind-medium leading-3 text-3xl py-6 flex justify-center items-center cursor-pointer bg-white drop-shadow-md"
					@click="goBack">
					<Icon
						height="33"
						icon="material-symbols-light:arrow-back-ios-new"
						class="absolute start-0 mx-2" />
					Voltar
				</button>
				<button
					class="rounded-3xl hind-medium leading-3 text-3xl text-white py-6 flex justify-center items-center cursor-pointer bg-red-550 drop-shadow-md disabled:opacity-50"
					:disabled="!paymentMethod"
					@click="handlePayment">
					Pagar
					<Icon
						height="33"
						icon="material-symbols:arrow-forward-rounded"
						class="ms-4" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

import CountryList from "../components/CountryList.vue";
import SimpleKeyboard from "../components/SimpleKeyboard.vue";
import { useCustomerStore } from "../stores/CustomerStore";
import { ref } from "vue";
import { useCartStore } from "../stores/CartStore";
import { useMainStore } from "../stores/MainStore";
import { getItemPrice } from "../helpers/MathHelpers";

const customerStore = useCustomerStore();
const router = useRouter();
const cartStore = useCartStore();
const mainStore = useMainStore();

const paymentMethod = ref("");

const { updateInput } = customerStore;

const goBack = () => {
	router.push({ name: "Dashboard" });
};

const handlePayment = () => {
	const orderPayload = {
		customerName: customerStore.costumerName,
		customerCpf: customerStore.costumerCpf,
		paymentMethod: paymentMethod.value,

		orderType: mainStore.orderType,

		totalPrice: cartStore.cartItems.reduce((acc, item) => {
			return acc + getItemPrice(item);
		}, 0),

		items: cartStore.cartItems.map((item) => ({
			productId: item.product.id,
			quantity: item.quantity,

			removableItems: item.removableItems.map((removableItem) => ({
				id: removableItem.id,
				name: removableItem.name,
			})),

			addableItems: item.addableItems.map((addableItem) => ({
				id: addableItem.id,
				name: addableItem.name,
				price: addableItem.price,
				quantity: addableItem.quantity,
			})),
		})),
	};

	console.log("orderPayload", orderPayload);
};
</script>

<style scoped>
.input-field {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%;
	box-sizing: border-box;
}
</style>
