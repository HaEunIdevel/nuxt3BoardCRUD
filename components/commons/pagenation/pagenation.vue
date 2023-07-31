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
          href="#"
          class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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
        <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
        <li
          v-for="pageNumber in pages"
          :key="pageNumber"
          :id="pageNumber"
          :class="{ active: pageNumber === currentPage }"
          class="page-item"
          @click="changePage(pageNumber)"
        >
          <a class="page-link" href="#">
            {{ pageNumber }}
          </a>
        </li>
        <a
          href="#"
          class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span class="sr-only">Next</span>
          <!-- <ChevronRightIcon class="h-5 w-5" aria-hidden="true" /> -->
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
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
export default {
  props: { currentPage, lastPage },
  setup(props, { emit }) {
    // 전체 페이지 (마지막 페이지)
    const totalPage = props.lastPage;
    const pages = computed(() => {
      const pages = [];
      for (let i = 1; i <= props.lastPage; i++) {
        pages.push(i);
      }
      return pages;
    });

    // 페이지 클릭
    const onClickPage = e => {
      const clickedPage = e.currentTarget.id; // 클릭한 현재 페이지 번호또는 id??
      // 현재 페이지를 클릭된 페이지로 변경
      if (props.currentPage === clickedPage) {
        props.currentPage = clickedPage;
      }
    };
    return {
      pages,
      totalPage,
      onClickPage,
    };
  },
};
</script>

<style></style>
