<template>
  <div class="p-10 w-full h-full flex flex-col items-center">
    <h1 class="text-5xl font- font-bold">게시물</h1>

    <ul class="w-full border-2 divide-teal-950 divide-y divide-solid">
      <li
        v-for="(board, i) in boards"
        :key="i"
        class="p-5 w-full cursor-pointer"
        @click="onClickMove(board._id)"
      >
        <NuxtLink :to="`/boards/${board._id}`">{{ board.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
// When accessing /posts/1, route.params.id will be 1
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const boards = ref([]);
    const router = useRouter();

    const fetchBoards = async () => {
      await axios
        .get("http://localhost:4000/boards")
        .then(res => (boards.value = res.data))
        .catch(error => {
          console.log(error);
        });
    };
    onMounted(() => {
      fetchBoards();
      console.log(boards);
    });
    const onClickMove = id => {
      router.push(`/boards/${id}`);
      console.log(id);
    };
    return {
      boards,
      onClickMove,
    };
  },
};
</script>

<style>
*,
::before,
::after {
  border-style: none;
}
</style>
