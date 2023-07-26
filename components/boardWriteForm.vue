<template>
  <form class="w-9/12 mx-auto" @submit="handleSubmit">
    <div class="mb-4">
      <textarea
        v-if="type === 'text'"
        :placeholder="placeholder"
        @input="updateValue"
      />
      <textarea
        v-else-if="type === 'textarea'"
        :placeholder="placeholder"
        @input="updateValue"
      ></textarea>
      <!-- :class="inputClass" -->
    </div>
  </form>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps(["type", "value", "placeholder"]);

const emit = defineEmits(["updateValue"]);
const updateValue = e => {
  emit("updateValue", e.target.value);
};
const handleSubmit = e => {
  e.preventDefault();
  // 여기서 폼 데이터를 처리하는 로직을 작성합니다.
};
</script>

<style></style>
