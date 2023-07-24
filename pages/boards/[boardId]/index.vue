<template>
  <section class="p-10 w-full h-full flex flex-col items-center gap-y-10">
    <div class="text-5xl">{{ board.title }}</div>
    <div class="text-2xl h-96 flex items-center overflow-auto">
      {{ board.contents }}
    </div>
    <div class="flex gap-6 justify-center">
      <button
        class="w-24 h-12 border border-teal-500 hover:bg-stone-100 rounded p-3 text-center"
        @click="ClickEdit"
      >
        수정
      </button>
      <NuxtLink
        :to="`/`"
        class="w-24 h-12 border border-teal-500 hover:bg-stone-100 rounded p-3 text-center"
      >
        홈
      </NuxtLink>
      <button
        class="w-24 h-12 border border-teal-500 hover:bg-stone-100 rounded p-3 text-center"
        @click="DeleteBoard"
      >
        삭제
      </button>
    </div>
  </section>
</template>
<script>
// When accessing /posts/1, route.params.id will be 1
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const board = reactive({});
    const route = useRoute();
    const router = useRouter();
    const fetchBoard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/boards/${route.params.boardId}`,
        );
        board.title = response.data.board.title;
        board.contents = response.data.board.contents;
      } catch (error) {
        console.error("게시물을 가져오는데 실패했습니다.", error);
      }
    };

    const DeleteBoard = async () => {
      try {
        await axios.delete(
          `http://localhost:4000/boards/${route.params.boardId}/delete`,
        );
        alert("삭제되었습니다");
        router.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    onMounted(async () => {
      await fetchBoard();
    });

    const ClickEdit = () => {
      router.push(`/boards/${route.params.boardId}/edit`);
    };
    return {
      board,
      DeleteBoard,
      ClickEdit,
    };
  },
};
</script>

<style></style>
