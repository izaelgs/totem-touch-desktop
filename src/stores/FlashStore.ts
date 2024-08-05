import { defineStore } from 'pinia';
import { ref } from 'vue';
import { toast, type ToastOptions } from 'vue3-toastify';

interface FlashMessage {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  options?: ToastOptions;
}

export const useFlashStore = defineStore('flash', () => {
  const messages = ref<FlashMessage[]>([]);

  const addMessage = (message: FlashMessage) => {
    messages.value.push(message);
  };

  const displayMessage = ({ message, type, options }: FlashMessage) => {
    switch (type) {
      case 'success':
        toast.success(message, { containerId: 'toastContainer', position: toast.POSITION.BOTTOM_RIGHT, hideProgressBar: true, closeButton: false, ...options });
        break;
      case 'error':
        toast.error(message, { containerId: 'toastContainer', position: toast.POSITION.BOTTOM_RIGHT, ...options });
        break;
      case 'info':
        toast.info(message, { containerId: 'toastContainer', position: toast.POSITION.BOTTOM_RIGHT, ...options });
        break;
      case 'warning':
        toast.warning(message, { containerId: 'toastContainer', position: toast.POSITION.BOTTOM_RIGHT, ...options });
        break;
    }
  };

  const clearMessages = () => {
    messages.value = [];
  };

  return {
    messages,
    addMessage,
    displayMessage,
    clearMessages
  };
});
