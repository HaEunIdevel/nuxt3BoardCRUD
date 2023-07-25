<template>
  <div class="flex justify-center">
    <table class="w-full border-collapse table-fixed">
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
    </table>
  </div>
</template>

<script>
import boardItem from "./boardItem.vue";
import usePost from "./commons/api.js";
export default {
  components: { boardItem },
  setup() {
    const { boards } = usePost();

    return {
      boards,
    };
  },
};
</script>

<style></style>
