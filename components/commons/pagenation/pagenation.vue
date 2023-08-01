<template>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <!-- <div>
      <p class="text-sm text-gray-700">
        Showing
        {{ " " }}
        <span class="font-medium">1</span>
        {{ " " }}
        to
        {{ " " }}
        <span class="font-medium">10</span>
        {{ " " }}
        of
        {{ " " }}
        <span class="font-medium">97</span>
        {{ " " }}
        results
      </p>
    </div> -->
    <div>
      <nav
        class="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <a
          href="javascript:void(0)"
          class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          @click="PreButton"
        >
          <span class="sr-only">Previous</span>
          <!-- <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <li
          v-for="(pageNumber, i) in pages"
          :key="i"
          :class="[
            'list-none',
            'relative',
            'inline-flex',
            'items-center',
            'px-4',
            'py-2',
            'text-sm',
            'font-semibold',
            'text-gray-900',
            'ring-1',
            'ring-inset',
            'ring-gray-300',
            'focus:z-20',
            'focus:outline-offset-0',
            'cursor-pointer',
            { 'bg-teal-900': isCurrentPage(pageNumber) },
            { 'hover:bg-teal-700': isCurrentPage(pageNumber) },
            { 'text-white': isCurrentPage(pageNumber) },
          ]"
          @click="changePage(pageNumber)"
        >
          <a class="page-link" href="#">
            {{ pageNumber }}
          </a>
        </li>
        <a
          href="javascript:void(0)"
          class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          @click="NextButton"
        >
          <span class="sr-only">Next</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    perPageItems: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const pages = ref([]);
    const totalPages = Math.ceil(props?.totalItems / props.perPageItems);

    for (let i = 1; i <= totalPages; i++) {
      pages.value.push(i);
    }
    const changePage = page => {
      if (page >= 1 && page <= totalPages) {
        emit("page", page);
      }
    };

    // 선택된 페이지와 현재 페이지가 같음 === true 반환
    const isCurrentPage = computed(() => page => {
      return props.currentPage === page;
    });

    // 다음버튼 클릭시 => +1페이지 이동, 이전클릭시 -1
    const PreButton = () => {
      if (props.currentPage === 1) {
        alert("첫 페이지입니다");
        return;
      }
      emit("preButton");
    };

    const NextButton = () => {
      if (props.currentPage === totalPages) {
        alert("마지막 페이지입니다");
        return;
      }
      emit("nextButton");
    };

    return {
      pages,
      changePage,
      isCurrentPage,
      PreButton,
      NextButton,
    };
  },
};
</script>

<style></style>
