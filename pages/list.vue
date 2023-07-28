<template>
  <div class="flex flex-col items-center gap-14">
    <h2 class="text-3xl">자유게시판</h2>
    <div class="mt-6 w-full flex flex-col items-end justify-end gap-5">
      <div>
        <!-- <form class="relative mx-auto w-max">
          <input
            type="search"
            class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:pl-16 focus:pr-4"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form> -->
      </div>
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
