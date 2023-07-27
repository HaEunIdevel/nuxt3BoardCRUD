<template>
  <div class="w-full h-4/5 flex justify-center">
    <!--  -->
    <!--  -->
    <!--  -->

    <ul
      id="noneScroll"
      role="list"
      class="divide-y h-[37rem] divide-gray-100 w-full overflow-y-auto overflow-x-hidden"
    >
      <board-item v-for="(board, i) in boards" :key="i" :board="board" :i="i" />
      <!--  -->
      <!--  -->
      <!-- <li
        v-for="person in people"
        :key="person.email"
        class="flex justify-between gap-x-6 py-5"
      >
        <div class="flex gap-x-4">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ person.name }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {{ person.email }}
            </p>
          </div>
        </div>
        <div class="hidden sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
          <p
            v-if="person.lastSeen"
            class="mt-1 text-xs leading-5 text-gray-500"
          >
            Last seen
            <time :datetime="person.lastSeenDateTime">{{
              person.lastSeen
            }}</time>
          </p>
          <div v-else class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p class="text-xs leading-5 text-gray-500">Online</p>
          </div>
        </div>
      </li> -->

      <!--  -->
      <!--  -->
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

<style scoped>
#noneScroll {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
#noneScroll::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
</style>
