import type { Product, ProductRemovableItem } from './ProductStore';
export interface CartItem {
    product: Product;
    removableItems: ProductRemovableItem[];
    addableItems: CartAddableItem[];
    quantity: number;
}
export interface CartAddableItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
export declare const useCartStore: import("pinia").StoreDefinition<"cart", import("pinia")._UnwrapAll<Pick<{
    cartItems: import("vue").Ref<{
        product: {
            id: number;
            name: string;
            description: string;
            imageUrl: string;
            price: number;
            removableItems: {
                id: number;
                name: string;
            }[];
            addableItems: {
                id: number;
                name: string;
                price: number;
            }[];
        };
        removableItems: {
            id: number;
            name: string;
        }[];
        addableItems: {
            id: number;
            name: string;
            price: number;
            quantity: number;
        }[];
        quantity: number;
    }[], CartItem[] | {
        product: {
            id: number;
            name: string;
            description: string;
            imageUrl: string;
            price: number;
            removableItems: {
                id: number;
                name: string;
            }[];
            addableItems: {
                id: number;
                name: string;
                price: number;
            }[];
        };
        removableItems: {
            id: number;
            name: string;
        }[];
        addableItems: {
            id: number;
            name: string;
            price: number;
            quantity: number;
        }[];
        quantity: number;
    }[]>;
    addProductToCart: (product: Product, removableItems: ProductRemovableItem[], addableItems: CartAddableItem[], quantity: number) => void;
    removeProductFromCart: (productId: number) => void;
    updateCartItem: (productId: number, payload: CartItem) => void;
    clearCart: () => void;
}, "cartItems">>, Pick<{
    cartItems: import("vue").Ref<{
        product: {
            id: number;
            name: string;
            description: string;
            imageUrl: string;
            price: number;
            removableItems: {
                id: number;
                name: string;
            }[];
            addableItems: {
                id: number;
                name: string;
                price: number;
            }[];
        };
        removableItems: {
            id: number;
            name: string;
        }[];
        addableItems: {
            id: number;
            name: string;
            price: number;
            quantity: number;
        }[];
        quantity: number;
    }[], CartItem[] | {
        product: {
            id: number;
            name: string;
            description: string;
            imageUrl: string;
            price: number;
            removableItems: {
                id: number;
                name: string;
            }[];
            addableItems: {
                id: number;
                name: string;
                price: number;
            }[];
        };
        removableItems: {
            id: number;
            name: string;
        }[];
        addableItems: {
            id: number;
            name: string;
            price: number;
            quantity: number;
        }[];
        quantity: number;
    }[]>;
    addProductToCart: (product: Product, removableItems: ProductRemovableItem[], addableItems: CartAddableItem[], quantity: number) => void;
    removeProductFromCart: (productId: number) => void;
    updateCartItem: (productId: number, payload: CartItem) => void;
    clearCart: () => void;
}, never>, Pick<{
    cartItems: import("vue").Ref<{
        product: {
            id: number;
            name: string;
            description: string;
            imageUrl: string;
            price: number;
            removableItems: {
                id: number;
                name: string;
            }[];
            addableItems: {
                id: number;
                name: string;
                price: number;
            }[];
        };
        removableItems: {
            id: number;
            name: string;
        }[];
        addableItems: {
            id: number;
            name: string;
            price: number;
            quantity: number;
        }[];
        quantity: number;
    }[], CartItem[] | {
        product: {
            id: number;
            name: string;
            description: string;
            imageUrl: string;
            price: number;
            removableItems: {
                id: number;
                name: string;
            }[];
            addableItems: {
                id: number;
                name: string;
                price: number;
            }[];
        };
        removableItems: {
            id: number;
            name: string;
        }[];
        addableItems: {
            id: number;
            name: string;
            price: number;
            quantity: number;
        }[];
        quantity: number;
    }[]>;
    addProductToCart: (product: Product, removableItems: ProductRemovableItem[], addableItems: CartAddableItem[], quantity: number) => void;
    removeProductFromCart: (productId: number) => void;
    updateCartItem: (productId: number, payload: CartItem) => void;
    clearCart: () => void;
}, "addProductToCart" | "removeProductFromCart" | "updateCartItem" | "clearCart">>;
