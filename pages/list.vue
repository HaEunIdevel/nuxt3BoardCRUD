<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex flex-col items-center gap-14">
    <h2 class="text-3xl">자유게시판</h2>
    <div class="mt-6 w-full flex flex-col items-end justify-end gap-5">
      <NuxtLink
        :to="`/boards/write`"
        class="rounded-md bg-teal-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >작성하기</NuxtLink
      >
    </div>

    <board-list :boards="boards"></board-list>
    <PageNation :currentPage="currentPage" :lastPage="lastPage" />
  </div>
</template>

<script>
import usePost from "../components/commons/api.js";
import boardList from "../components/boardList.vue";
import PageNation from "../components/commons/pagenation/pagenation.vue";
import { onMounted } from "vue";
export default {
  components: { boardList, PageNation },
  setup() {
    const { boards, fetchBoards } = usePost();
    //
    console.log(boards?.value.length); // 총 개수
    // 마지막 개수 = 총개수 / 페이지당 보여줄 항목
    // 페이지 번호 클릭시 해당 페이지 보여주기 => 배열에서 쪼개기
    // 이전 페이지 클릭시..
    // 다음 페이지 클릭시...
    const lastPage = Math.ceil((boards?.value.length ?? 5) / 5);
    // 현재 페이지
    const currentPage = 1;

    onMounted(() => {
      fetchBoards();
    });
    return {
      boards,
      lastPage,
      currentPage,
    };
  },
};
</script>

<style></style>
