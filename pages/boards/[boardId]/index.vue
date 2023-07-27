<template>
  <div class="w-10/12 flex flex-col items-center mx-auto">
    <section class="w-full border-b-2 border-green-800 mb-12 whitespace-pre-line">
      <h1 class="text-3xl font-semibold mb-8 h-24">
        {{ data?.board.title.replace(/<br\s*\/?>/g, "\n") }}
      </h1>
      <div class="flex justify-between pb-9 text-xl">
        <span>ooo</span>
        <span>20xx.xx.xx</span>
      </div>
    </section>
    <section class="w-full h-2/3">
      <p id="scrollSettings" class="h-full overflow-scroll text-gray-600 text-xl whitespace-pre-line">
        {{ data?.board.contents.replace(/<br\s*\/?>/g, "\n") }}
      </p>
    </section>
    <section class="h-24 w-full flex justify-center items-center gap-12 pt-10">
      <NuxtLink
        :to="`/`"
        class="w-32 h-12 border border-green-800 hover:bg-gray-100 p-3 flex items-center justify-center hover:cursor-pointer"
        >목록</NuxtLink
      >
      <NuxtLink
        :to="`/boards/${route.params.boardId}/edit`"
        class="w-32 h-12 border border-green-800 hover:bg-gray-100 p-3 flex items-center justify-center hover:cursor-pointer"
        >수정</NuxtLink
      >
      <button
        class="w-32 h-12 border border-green-800 hover:bg-gray-100 p-3 flex items-center justify-center hover:cursor-pointer"
        @click="DeleteBoard"
        >삭제</button
      >
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import usePosts from "../../../components/commons/api.js";
import { useRoute,useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter()
    const { fetchBoard ,deleteBoard} = usePosts();
    const data = ref(null);

    // onMounted 훅을 사용하여 페이지가 로드될 때 게시판 데이터를 가져옴
    // onMounted(async () => {
    //   const boardId = this.$route.params.id; // 동적 라우트 파라미터에서 게시판 ID를 가져옴
    //   board.value = await fetchBoard(boardId);
    // });


    const DeleteBoard = async()=>{
        await deleteBoard(route.params.boardId)
        router.push('/')
   }
    
    onMounted(async () => {
      data.value = await fetchBoard(route.params.boardId);
    });
    
    return {
      data,
      DeleteBoard,
      route
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
