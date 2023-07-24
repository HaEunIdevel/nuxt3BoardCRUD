<template>
  <section class="w-screen h-screen p-10 flex flex-col gap-10 items-center">
    <h1 class="text-4xl font-bold">게시물 등록</h1>
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
      <button
        class="w-24 h-12 border-2 border-emerald-700 active:bg-stone-100 p-3"
        @click="moveList"
      >
        목록으로
      </button>
      <button
        class="w-24 h-12 border-2 border-emerald-700 active:bg-stone-100 p-3"
        @click="sendData"
      >
        등록
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const contents = ref("");
    const router = useRouter();
    const sendData = () => {
      if (!contents.value || !title.value) {
        return alert("내용을 입력해주세요");
      }
      // console.log("title:", title.value);
      // console.log("contents:", contents.value);
      const toWrite = {
        contents: contents.value,
        title: title.value,
      };
      axios
        .post("http://localhost:4000/boards", toWrite)
        .then(() => {
          alert("등록완료");
          router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    };
    const moveList = () => {
      router.push("/");
    };

    return {
      title,
      contents,
      sendData,
      moveList,
    };
  },
};
</script>
