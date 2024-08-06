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
        "Q W E R T Y U I O P",
        "A S D F G H J K L",
        "Z X C V B N M",
        "{space}"
      ],
    },
    display: {
      '{space}': ' '
    },
    buttonTheme: [
      {
        class: "simple-keyboard-space",
        buttons: "{space}"
      }
    ]
  });
});

watch(() => props.input, (newInput) => {
  if (keyboard.value) {
    keyboard.value.setInput(newInput);
  }
});
</script>
