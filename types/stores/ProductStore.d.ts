import type { ProductType } from './MainStore';
export interface Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    removableItems: ProductRemovableItem[];
    addableItems: ProductAddableItem[];
}
export interface ProductRemovableItem {
    id: number;
    name: string;
}
export interface ProductAddableItem {
    id: number;
    name: string;
    price: number;
}
export declare const useProductStore: import("pinia").StoreDefinition<"products", import("pinia")._UnwrapAll<Pick<{
    products: import("vue").Ref<{
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
    }[], Product[] | {
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
    }[]>;
    loading: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<string | null, string | null>;
    fetchProducts: (productType: ProductType) => Promise<void>;
}, "products" | "loading" | "error">>, Pick<{
    products: import("vue").Ref<{
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
    }[], Product[] | {
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
    }[]>;
    loading: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<string | null, string | null>;
    fetchProducts: (productType: ProductType) => Promise<void>;
}, never>, Pick<{
    products: import("vue").Ref<{
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
    }[], Product[] | {
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
    }[]>;
    loading: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<string | null, string | null>;
    fetchProducts: (productType: ProductType) => Promise<void>;
}, "fetchProducts">>;
