<template>
  <div class="mx-auto max-w-7xl sm:py-32 lg:px-8">
    <h1 class="font-bold text-3xl pb-10">작성하기</h1>
    <board-write-form
      id="title"
      label="제목"
      :type="`text`"
      :value="title"
      :placeholder="`제목을 입력해주세요`"
      @updateValue="setTitle"
    ></board-write-form>
    <board-write-form
      id="title"
      label="내용"
      :type="`textarea`"
      :value="contents"
      :placeholder="`내용을 입력해주세요`"
      @updateValue="setContents"
    ></board-write-form>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <NuxtLink :to="`/`" class="text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </NuxtLink>
      <button
        type="button"
        class="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="onClickCreateBoard"
      >
        등록
      </button>
    </div>
  </div>
</template>

<script>
import BoardWriteForm from "../../components/boardWriteForm.vue";
import usePosts from "../../components/commons/api.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { BoardWriteForm },
  setup() {
    const router = useRouter();
    const { createBoard, fetchBoards } = usePosts();

    const title = ref("");
    const contents = ref("");

    const onClickCreateBoard = async () => {
      if (title.value === "" || contents.value === "") {
        alert("내용을 작성해주세요");
        return;
      }
      const createItem = {
        title: String(title.value).replace(/(\n|\r\n)/g, "<br/>"),
        contents: String(contents.value).replace(/(\n|\r\n)/g, "<br/>"),
      };

      await createBoard(createItem);
      alert("게시글이 등록되었습니다");

      await fetchBoards();
      router.push("/");
    };
    const setTitle = value => {
      title.value = value;
    };

    const setContents = value => {
      contents.value = value;
    };
    return {
      setTitle,
      setContents,
      onClickCreateBoard,
      title,
      contents,
    };
  },
};
</script>

<style></style>
