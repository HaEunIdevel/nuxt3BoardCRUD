<template>
  <div class="w-full h-[620px] flex justify-center">
    <!--  -->
    <!--  -->
    <!--  -->

    <ul id="noneScroll" role="list" class="divide-y w-full divide-black">
      <board-item v-for="(board, i) in boards" :key="i" :board="board" :i="i" />
    </ul>

    <!--  -->
    <!--  -->
    <!--  -->

    <!-- <table class="w-full border-collapse table-fixed">
      <thead>
        <tr>
          <th class="w-1/12 border-y-2 border-green-800 px-4">번호</th>
          <th class="w-2/12 border-y-2 border-green-800 px-4 py-2">제목</th>
          <th class="w-3/5 border-y-2 border-green-800 px-6 py-4">내용</th>
        </tr>
      </thead>
      <tbody>
        <board-item
          v-for="(board, i) in boards"
          :key="i"
          :board="board"
          :i="i"
        />
      </tbody>
    </table> -->
  </div>
</template>

<script>
import boardItem from "./boardItem.vue";
export default {
  components: { boardItem },
  props: {
    boards: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
#noneScroll {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
#noneScroll::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
</style>
