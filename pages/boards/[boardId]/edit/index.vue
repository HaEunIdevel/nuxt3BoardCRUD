<template>
  <div>
    <section class="w-screen h-screen p-10 flex flex-col gap-10 items-center">
      <h1 class="text-4xl font-bold">게시물 수정</h1>
      <input
        v-model="title"
        type="text"
        placeholder="제목을 입력해주세요"
        class="w-full h-12 p-5 border-2 rounded border-cyan-800"
      />
      <textarea
        v-model="contents"
        placeholder="내용을 입력해주세요"
        class="w-full h-1/5 p-5 border-2 rounded border-cyan-800 resize-none"
        @keyup.enter="sendData"
      ></textarea>
      <div class="flex gap-14 justify-center">
        <NuxtLink
          :to="`/boards/${$route.params.boardId}`"
          class="w-24 h-12 border-2 border-emerald-700 active:bg-stone-100 p-3 text-center"
        >
          취소
        </NuxtLink>
        <button
          class="w-24 h-12 border-2 border-emerald-700 active:bg-stone-100 p-3"
          @click="sendEdit"
        >
          수정
        </button>
        <NuxtLink
          :to="`/`"
          class="w-24 h-12 border-2 border-emerald-700 active:bg-stone-100 p-3 text-center"
        >
          홈
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const title = ref("");
    const contents = ref("");
    const route = useRoute();
    const router = useRouter();

    const sendEdit = async () => {
      const toEdit = {};

      if (title.value !== "") {
        toEdit.title = title.value;
      }

      if (contents.value !== "") {
        toEdit.contents = contents.value;
      }

      console.log(route.params);
      try {
        await axios.patch(
          `http://localhost:4000/boards/${route.params.boardId}/edit`,
          toEdit,
        );
        alert("수정완료");
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    };
    return {
      sendEdit,
      title,
      contents,
    };
  },
};
</script>

<style></style>
