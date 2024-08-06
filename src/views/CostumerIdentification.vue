<template>
  <div class="h-screen w-screen bg-white pt-80">
    <div class="flex justify-end gap-1 md:gap-2 w-screen p-[2%] absolute top-0 end-0">
      <CountryList />
    </div>

    <div class="hind-regular w-fit text-5xl leading-7 pb-28 px-12">
      Identificação
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

    <div class="px-12 pb-8" v-if="customerStore.showCpfQuestion">
      <div class="hind-regular w-fit text-4xl leading-7 pb-6">
        Deseja inserir CPF/CNPJ na nota?
      </div>

      <div class="grid grid-cols-2 gap-8">
        <button
          class="rounded-3xl hind-medium leading-3 text-3xl py-6 flex justify-center items-center cursor-pointer bg-white drop-shadow-md"
          @click="() => updateInput('não', 'cpfQuestion')">
          Não
        </button>
        <button
          class="rounded-3xl hind-medium leading-3 text-3xl text-white py-6 flex justify-center items-center cursor-pointer bg-red-550 drop-shadow-md"
          @click="() => updateInput('sim', 'cpfQuestion')">
          Sim
        </button>
      </div>
    </div>

    <div class="px-12 pb-8" v-if="customerStore.showCpfInput">
      <div class="hind-regular w-fit text-4xl leading-7 pb-6">
        Qual o seu cpf?
      </div>
      <input
        v-model="customerStore.costumerCpf"
        class="hind-regular w-fit text-6xl leading-3 text-red-550 mb-6" />
      <SimpleNumberKeyboard
        :input="customerStore.costumerCpf"
        keyboardClass="simple-keyboard"
        @onChange="(value) => updateInput(value, 'cpf')" />
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
          class="rounded-3xl hind-medium leading-3 text-3xl text-white py-6 flex justify-center items-center cursor-pointer bg-red-550 drop-shadow-md"
          @click="toggleNextInput">
          Continuar
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
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

import CountryList from '../components/CountryList.vue';
import SimpleKeyboard from '../components/SimpleKeyboard.vue';
import SimpleNumberKeyboard from '../components/SimpleNumberKeyboard.vue';
import { useCustomerStore } from '../stores/CustomerStore';

const customerStore = useCustomerStore();

const { updateInput, toggleNextInput } = customerStore;
const router = useRouter();

const goBack = () => {
	router.push({ name: "Dashboard" });
};

onMounted(() => {
  customerStore.costumerName = '';
  customerStore.costumerCpf = '';
  customerStore.showNameInput = true;
  customerStore.showCpfQuestion = false;
  customerStore.showCpfInput = false;
});

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
