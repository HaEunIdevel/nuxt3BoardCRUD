<template>
  <div>
    <BaordHeader />

    <slot />
  </div>
</template>

<script>
import BaordHeader from "../components/header.vue";
export default {
  components: {
    BaordHeader, // 컴포넌트를 등록합니다.
  },
  setup() {
    // 컴포넌트 로직을 작성합니다.
  },
};
</script>

<style></style>
