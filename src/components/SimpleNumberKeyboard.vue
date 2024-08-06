<template>
  <div :class="keyboardClass"></div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, onMounted } from 'vue';
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

const props = defineProps<{
  keyboardClass: string;
  input: string;
}>();

const emit = defineEmits(['onChange', 'onKeyPress']);

const keyboard = ref<Keyboard | null>(null);

const onChange = (input: string) => {
  emit("onChange", input);
};

const onKeyPress = (button: string) => {
  emit("onKeyPress", button);
};

onMounted(() => {
  keyboard.value = new Keyboard(`.${props.keyboardClass}`, {
    onChange,
    onKeyPress,
    layout: {
      default: [
        "1 2 3",
        "4 5 6",
        "7 8 9",
        "0"
      ],
    },
  });
});

watch(() => props.input, (newInput) => {
  if (keyboard.value) {
    keyboard.value.setInput(newInput);
  }
});
</script>
