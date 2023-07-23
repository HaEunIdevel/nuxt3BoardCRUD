<template>
  <div>
    <h1>Welcome to the homepage!!</h1>
    <ul>
      <li>dkssi</li>
    </ul>
    <ul>
      <li
        v-for="(board, i) in boards"
        :key="i"
        class="block w-screen p-5 border-2 border-indigo-600"
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
export default {
  setup() {
    const boards = ref([]);
    const fetchBoards = async () => {
      await axios
        .get("http://localhost:4000/boards")
        .then((res) => (boards.value = res.data))
        .catch((error) => {
          console.log(error);
        });
    };
    onMounted(() => {
      fetchBoards();
      console.log(boards);
    });

    return {
      boards,
    };
  },
};
</script>

<style></style>
