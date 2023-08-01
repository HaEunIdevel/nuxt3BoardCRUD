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

    <board-list :boards="newBoards"></board-list>
    <PageNation
      :totalItems="totalItems"
      :perPageItems="perPageItems"
      :currentPage="currentPage"
      @page="setCurrentPage"
    />
  </div>
</template>

<script>
import usePost from "../components/commons/api.js";
import boardList from "../components/boardList.vue";
import PageNation from "../components/commons/pagenation/pagenation.vue";
import { ref, computed } from "vue";
export default {
  components: { boardList, PageNation },
  async setup() {
    const { fetchBoards } = usePost();
    // //
    // 페이지당 보여줄 항목
    await fetchBoards(); // 먼저 돔이 그려질때 목록을 전부 불러옴
    const { boards } = usePost(); // 목록을 불러오는 api에서 boards에 데이터 넣음.따라서 fetchBoards한 뒤에 boards를 부르게되면
    // 데이터가 할당된 boards를 가져올  수 있음
    const perPageItems = ref(5);
    const totalItems = ref(boards?.value?.length || 0);
    // // 현재 페이지
    let currentPage = ref(1);
    // console.log(boards?.value.length); // 총 개수
    // // 마지막 개수 = 총개수 / 페이지당 보여줄 항목
    // // 페이지 번호 클릭시 해당 페이지 보여주기 => 배열에서 쪼개기
    // // 이전 페이지 클릭시..
    // // 다음 페이지 클릭시...
    // const lastPage = Math.ceil((boards?.value.length ?? 5) / 5);
    // currentPage가 변경될 때마다 newBoards를 계산
    const newBoards = computed(() => {
      const start = (currentPage.value - 1) * perPageItems.value;
      return boards?.value?.slice(start, start + perPageItems.value);
    });

    console.log(typeof newBoards.value);

    const setCurrentPage = page => {
      currentPage.value = page;
      console.log(currentPage.value);
      return currentPage.value;
    };

    return {
      boards,
      perPageItems,
      totalItems,
      newBoards,
      currentPage,
      setCurrentPage,
    };
  },
};
</script>

<style></style>
