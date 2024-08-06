import type { CartAddableItem, CartItem } from "../stores/CartStore";

export const getItemPrice = (item: CartItem) => {
	const productPrice = item.product.price;
	const addablePrice = item.addableItems.reduce(
		(acc: number, item: CartAddableItem) => acc + item.price * item.quantity,
		0
	);

	return (productPrice * item.quantity) + addablePrice;
};