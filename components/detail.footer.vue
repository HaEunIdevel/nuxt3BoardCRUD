<template>
  <div class="mt-12">
    <form class="bg-white rounded-lg pt-2" @click="handleSubmit">
      <div class="flex flex-wrap -mx-3 mb-6">
        <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg font-bold">
          0개의 댓글
        </h2>
        <div class="w-full md:w-full px-3 mb-2 mt-2">
          <textarea
            class="rounded border border-gray-300 leading-normal resize-none w-full h-32 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none"
            name="body"
            placeholder="댓글을 작성하세요"
            required
          ></textarea>
        </div>
        <div class="md:w-full flex px-3 justify-end">
          <div class="-mr-1">
            <button
              type="button"
              class="rounded-md bg-teal-900 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              댓글 작성
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    const handleSubmit = e => {
      e.preventDefault();
      // 여기서 폼 데이터를 처리하는 로직을 작성합니다.
    };
    return {
      handleSubmit,
    };
  },
};
</script>

<style></style>
