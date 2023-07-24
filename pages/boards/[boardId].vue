<template>
  <section>
    <div>{{ board.title }}</div>
    <div>{{ board.contents }}</div>
  </section>
</template>
<script>
// When accessing /posts/1, route.params.id will be 1
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const board = reactive({});
    const route = useRoute();

    const fetchBoard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/boards/${route.params.boardId}`,
        );
        console.log(response.data);
        board.title = response.data.board.title;
        board.contents = response.data.board.contents;
      } catch (error) {
        console.error("게시물을 가져오는데 실패했습니다.", error);
      }
    };

    onMounted(async () => {
      await fetchBoard();
    });

    return {
      board,
    };
  },
};
</script>

<style></style>
