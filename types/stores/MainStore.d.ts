export type OrderType = 'takeaway' | 'dinein';
export type ProductType = 'appetizers' | 'combos' | 'drinks' | 'desserts';
export declare enum ProductTypes {
    appetizers = "ENTRADAS",
    combos = "COMBOS",
    drinks = "BEBIDAS",
    desserts = "SOBREMESAS"
}
export declare const useMainStore: import("pinia").StoreDefinition<"main", import("pinia")._UnwrapAll<Pick<{
    orderType: import("vue").Ref<OrderType, OrderType>;
    productType: import("vue").Ref<ProductType, ProductType>;
    selectOrderType: (type: OrderType) => void;
    selectProductType: (type: ProductType) => void;
}, "orderType" | "productType">>, Pick<{
    orderType: import("vue").Ref<OrderType, OrderType>;
    productType: import("vue").Ref<ProductType, ProductType>;
    selectOrderType: (type: OrderType) => void;
    selectProductType: (type: ProductType) => void;
}, never>, Pick<{
    orderType: import("vue").Ref<OrderType, OrderType>;
    productType: import("vue").Ref<ProductType, ProductType>;
    selectOrderType: (type: OrderType) => void;
    selectProductType: (type: ProductType) => void;
}, "selectOrderType" | "selectProductType">>;
