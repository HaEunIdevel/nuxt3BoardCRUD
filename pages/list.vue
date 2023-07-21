<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <NuxtLink to="`/`">Home</NuxtLink>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const route = useRouter();

// When accessing /posts/1, route.params.id will be 1
console.log(route);
</script>

<style></style>
