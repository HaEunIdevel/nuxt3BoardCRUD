<template>
  <div>
    <h1>Welcome to the detail</h1>
    <NuxtLink to="`/`">Home</NuxtLink>
  </div>
</template>
<script>
// When accessing /posts/1, route.params.id will be 1
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const board = ref({});
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/boards/${board.value._id}`
        );
        post.value = response.data;
      } catch (error) {
        console.error("게시물을 가져오는데 실패했습니다.", error);
      }
    };
    onMounted(() => {
      fetchPost();
    });
    return {
      board,
    };
  },
};
</script>

<style></style>
