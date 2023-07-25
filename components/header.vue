<template>
  <section class="w-screen flex flex-col p-10">
    <img
      src="/nuxt-logo.png"
      class="w-20 h-20 cursor-pointer"
      @click="moveToMain"
    />
    <!--<div class="w-screen h-20 bg-emerald-300" /> -->
  </section>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const moveToMain = () => {
      router.push("/");
    };

    return {
      moveToMain,
    };
  },
};
</script>

<style></style>
