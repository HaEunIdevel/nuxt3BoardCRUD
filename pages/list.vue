<template>
  <div class="p-10 w-full h-full flex flex-col items-center gap-y-10">
    <h1 class="text-5xl font-bold">게시물</h1>

    <ul class="w-3/5 divide-teal-500 divide-y divide-solid">
      <li
        v-for="(board, i) in boards"
        :key="i"
        class="p-5 w-full cursor-pointer hover:bg-stone-100"
        @click="MoveDetail(board._id)"
      >
        <NuxtLink :to="`/boards/${board._id}`">{{ board.title }}</NuxtLink>
      </li>
    </ul>
    <div class="w-3/5 h-12 flex justify-end">
      <button
        class="w-32 h-full border border-teal-500 hover:bg-stone-100 rounded"
        @click="MoveToWrite"
      >
        등록하기
      </button>
    </div>
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
    });
    const MoveDetail = id => {
      router.push(`/boards/${id}`);
      console.log(id);
    };
    const MoveToWrite = () => {
      router.push("/boards/write");
    };
    return {
      boards,
      MoveDetail,
      MoveToWrite,
    };
  },
};
</script>

<style scoped>
::before,
::after {
  border-style: none;
}
</style>
