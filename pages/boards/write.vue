<template>
  <section class="w-screen h-screen">
    <input
      v-model="title"
      type="text"
      class="w-screen h-12 p-5 border-2 border-indigo-600"
    />
    <textarea
      v-model="contents"
      placeholder="내용을 입력해주세요"
      class="w-screen h-1/5 border-2 border-red-600"
    ></textarea>
    <button @click="sendData">데이터 전송</button>
  </section>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const title = ref("");
    const contents = ref("");
    const sendData = () => {
      console.log("title:", title.value);
      console.log("contents:", contents.value);
      const toWrite = {
        contents: contents.value,
        title: title.value,
      };
      axios
        .post("http://localhost:4000/boards", toWrite)
        .then((res) => {
          console.log("등록완료");
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      title,
      contents,
      sendData,
    };
  },
};
</script>

<style>
* {
  padding: 10px;
}
</style>
