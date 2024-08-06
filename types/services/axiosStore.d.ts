import { type AxiosInstance } from 'axios';
interface AxiosStoreState {
    axiosInstance: AxiosInstance;
}
export declare const useAxiosStore: import("pinia").StoreDefinition<"axiosStore", AxiosStoreState, {}, {
    get<T>(url: string, config?: {}): Promise<T>;
    post<T>(url: string, data: any, config?: {}): Promise<T>;
    put<T>(url: string, data: any, config?: {}): Promise<T>;
    patch<T>(url: string, data: any, config?: {}): Promise<T>;
    delete<T>(url: string, config?: {}): Promise<T>;
    handleAuthorizationError(error: any): never;
}>;
export {};
