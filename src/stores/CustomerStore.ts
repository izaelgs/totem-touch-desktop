// src/stores/useCustomerStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useCustomerStore = defineStore('customer', () => {
  const router = useRouter();

  const costumerName = ref('');
  const costumerCpf = ref('');
  const showNameInput = ref(true);
  const showCpfQuestion = ref(false);
  const showCpfInput = ref(false);

  const updateInput = (input: string, field: 'name' | 'cpfQuestion' | 'cpf') => {
    switch (field) {
      case 'name':
        costumerName.value = input;
        break;
      case 'cpfQuestion':
        if (input === 'sim') {
          showCpfQuestion.value = false;
          showCpfInput.value = true;
        } else {
          toggleNextInput();
        }

        break;
      case 'cpf':
        costumerCpf.value = input;
        break;
    }
  };

  const toggleNextInput = () => {
    if (showNameInput.value) {
      showNameInput.value = false;
      showCpfInput.value = false;
      showCpfQuestion.value = true;
    } else if (showCpfQuestion.value) {
      router.push({ name: 'Payment' });
    } else if (showCpfInput.value) {
      router.push({ name: 'Payment' });
    }
  };

  return {
    costumerName,
    costumerCpf,
    showNameInput,
    showCpfQuestion,
    showCpfInput,
    updateInput,
    toggleNextInput,
  };
});
