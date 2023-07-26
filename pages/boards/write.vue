<template>
  <div>
    <board-write-form
      :type="`text`"
      :value="title"
      :placeholder="`제목을 입력해주세요`"
      @updateValue="setTitle"
    ></board-write-form>
    <board-write-form
      :type="`textarea`"
      :value="contents"
      :placeholder="`내용을 입력해주세요`"
      @updateValue="setContents"
    ></board-write-form>
    <div class="flex justify-end">
      <button type="button" @click="onClickCreateBoard">dd</button>
    </div>
  </div>
</template>

<script>
import BoardWriteForm from "../../components/boardWriteForm.vue";
import usePosts from "../../components/commons/api.js";
import { ref } from "vue";

export default {
  components: { BoardWriteForm },
  setup() {
    const { createBoard } = usePosts();

    const title = ref("");
    const contents = ref("");

    const onClickCreateBoard = async () => {
      const createItem = {
        title: title.value.replace(/\n/g, "<br>"),
        contents: contents.value.replace(/\n/g, "<br>"),
      };

      // await createBoard(createItem);
      console.log("hi", createItem);
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
