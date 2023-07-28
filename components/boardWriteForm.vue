<template>
  <div>
    <form @submit="handleSubmit">
      <div>
        <div class="pb-12">
          <!--  -->
          <!--  -->

          <section class="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
            <!--  -->
            <!--  -->
            <!--  -->

            <div class="col-span-3">
              <label
                :for="id"
                class="block text-sm font-medium leading-6 text-gray-900"
                >{{ label }}</label
              >
              <div class="mt-2">
                <input
                  v-if="type === 'text'"
                  :id="id"
                  type="text"
                  :value="value"
                  class="block w-full p-3 h-16 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :placeholder="placeholder"
                  @input="updateValue"
                />
              </div>
            </div>
            <div v-if="type === 'text'" class="col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900"
                >작성자</label
              >
              <div class="mt-2">
                <input
                  v-if="type === 'text'"
                  type="text"
                  class="block w-full p-3 h-16 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="작성자를 입력해주세요"
                />
              </div>
            </div>
            <!--  -->
            <!--  -->
            <!--  -->
            <div class="col-span-full">
              <div class="mt-2">
                <textarea
                  v-if="type === 'textarea'"
                  :id="id"
                  :placeholder="placeholder"
                  :value="value"
                  class="block w-full h-96 resize-none p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  @input="updateValue"
                />
              </div>
            </div>

            <!--  -->
            <!--  -->
            <!--  -->
            <div v-if="type === 'textarea'" class="col-span-full mt-6">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >사진</label
              >
              <div
                class="mt-2 h-72 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
              >
                <div class="text-center">
                  <PhotoIcon
                    class="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- :class="inputClass" -->
      </div>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps(["type", "value", "placeholder", "id", "label"]);

const emit = defineEmits(["updateValue"]);
const updateValue = e => {
  emit("updateValue", e.target.value);
};
const handleSubmit = e => {
  e.preventDefault();
  // 여기서 폼 데이터를 처리하는 로직을 작성합니다.
};
</script>

<style></style>
