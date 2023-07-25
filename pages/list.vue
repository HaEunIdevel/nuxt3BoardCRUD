<template>
  <div class="flex flex-col items-center gap-14">
    <h2 class="text-3xl">자유게시판</h2>
    <div class="w-full flex">
      <NuxtLink
        :to="`/boards/write`"
        class="w-32 h-12 border border-green-800 hover:bg-gray-100 p-3 flex items-center justify-center"
        >작성하기</NuxtLink
      >
    </div>
    <board-list :boards="boards"></board-list>
  </div>
</template>

<script>
import usePost from "../components/commons/api.js";
import boardList from "../components/boardList.vue";
import { onMounted } from "vue";
export default {
  components: { boardList },
  setup() {
    const { boards, fetchBoards } = usePost();

    onMounted(() => {
      fetchBoards();
    });

    return {
      boards,
    };
  },
};
</script>

<style></style>
