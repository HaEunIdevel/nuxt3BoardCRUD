<template>
  <div class="flex flex-col items-center gap-14">
    <h2 class="text-3xl">자유게시판</h2>
    <div class="mt-6 w-full flex items-center justify-end">
      <NuxtLink
        :to="`/boards/write`"
        class="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
