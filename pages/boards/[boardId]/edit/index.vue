<template>
  <div class="mx-auto w-8/12 sm:py-32 lg:px-8">
    <h1 class="font-bold text-3xl pb-10">수정하기</h1>
    <template v-if="data">
      <board-write-form
        id="title"
        label="제목"
        :type="`text`"
        :value="title.replace(/<br\s*\/?>/g, '\n')"
        :placeholder="`제목을 입력하세요`"
        @updateValue="setTitle"
      >
      </board-write-form>
      <board-write-form
        id="contents"
        label="내용"
        :type="`textarea`"
        :value="contents.replace(/<br\s*\/?>/g, '\n')"
        :placeholder="`내용을 입력해주세요`"
        @updateValue="setContents"
      >
      </board-write-form>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <NuxtLink
          :to="`/`"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </NuxtLink>
        <button
          type="button"
          class="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="onClickEdit"
        >
          수정
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import BoardWriteForm from "../../../../components/boardWriteForm.vue";
import usePosts from "../../../../components/commons/api.js";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  components: { BoardWriteForm },

  setup() {
    const { fetchBoard, editBoard, fetchBoards } = usePosts();
    const title = ref("");
    const contents = ref("");
    const data = ref(null);
    const router = useRouter();
    const route = useRoute();

    onMounted(async () => {
      const fetchData = await fetchBoard(route.params.boardId); // 기존값 가져오기
      data.value = fetchData.board;
      title.value = fetchData.board.title;
      contents.value = fetchData.board.contents;
      console.log(data.value);
    });

    const setTitle = value => {
      data.value.title = value;
    };

    const setContents = value => {
      data.value.contents = value;
    };

    const onClickEdit = async () => {
      if (
        title.value === data.value.title &&
        contents.value === data.value.contents
      ) {
        alert("수정사항이 없습니다");
        router.push(`/boards/${route.params.boardId}`);
        return;
      }
      const updateItem = {
        title: data.value.title.replace(/(\n|\r\n)/g, "<br/>"),
        contents: data.value.contents.replace(/(\n|\r\n)/g, "<br/>"),
      };

      await editBoard(route.params.boardId, updateItem);
      alert("수정이 완료되었습니다");

      await fetchBoards();
      router.push(`/boards/${route.params.boardId}`);
    };
    return {
      data,
      setContents,
      onClickEdit,
      setTitle,
      title,
      contents,
    };
  },
};
</script>

<style></style>
