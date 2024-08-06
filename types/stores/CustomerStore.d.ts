export declare const useCustomerStore: import("pinia").StoreDefinition<"customer", import("pinia")._UnwrapAll<Pick<{
    costumerName: import("vue").Ref<string, string>;
    costumerCpf: import("vue").Ref<string, string>;
    showNameInput: import("vue").Ref<boolean, boolean>;
    showCpfQuestion: import("vue").Ref<boolean, boolean>;
    showCpfInput: import("vue").Ref<boolean, boolean>;
    updateInput: (input: string, field: "name" | "cpfQuestion" | "cpf") => void;
    toggleNextInput: () => void;
}, "costumerName" | "costumerCpf" | "showNameInput" | "showCpfQuestion" | "showCpfInput">>, Pick<{
    costumerName: import("vue").Ref<string, string>;
    costumerCpf: import("vue").Ref<string, string>;
    showNameInput: import("vue").Ref<boolean, boolean>;
    showCpfQuestion: import("vue").Ref<boolean, boolean>;
    showCpfInput: import("vue").Ref<boolean, boolean>;
    updateInput: (input: string, field: "name" | "cpfQuestion" | "cpf") => void;
    toggleNextInput: () => void;
}, never>, Pick<{
    costumerName: import("vue").Ref<string, string>;
    costumerCpf: import("vue").Ref<string, string>;
    showNameInput: import("vue").Ref<boolean, boolean>;
    showCpfQuestion: import("vue").Ref<boolean, boolean>;
    showCpfInput: import("vue").Ref<boolean, boolean>;
    updateInput: (input: string, field: "name" | "cpfQuestion" | "cpf") => void;
    toggleNextInput: () => void;
}, "updateInput" | "toggleNextInput">>;
