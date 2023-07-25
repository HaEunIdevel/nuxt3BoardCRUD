<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-semibold mb-8">{{ data?.board.title }}</h1>
    <p id="scrollSettings" class="h-1/6 overflow-auto text-gray-600">
      {{ data?.board.contents }}
    </p>
  </div>
</template>

<script>
import { onMounted } from "vue";
import usePosts from "../../../components/commons/api.js";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const { fetchBoard } = usePosts();
    const data = ref(null);

    // onMounted 훅을 사용하여 페이지가 로드될 때 게시판 데이터를 가져옴
    // onMounted(async () => {
    //   const boardId = this.$route.params.id; // 동적 라우트 파라미터에서 게시판 ID를 가져옴
    //   board.value = await fetchBoard(boardId);
    // });
    onMounted(async () => {
      data.value = await fetchBoard(route.params.boardId);
    });
    return {
      data,
    };
  },
};
</script>

<style scoped>
#scrollSettings {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
#scrollSettings::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
</style>
