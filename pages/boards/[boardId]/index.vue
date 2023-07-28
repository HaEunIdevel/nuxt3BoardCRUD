<template>
  <div class="w-full flex flex-col items-center mx-auto">
    <section class="w-full border-b  mb-12 whitespace-pre-line">
      <h1 class="text-3xl font-semibold mb-8 h-24">
        {{ data?.board.title.replace(/<br\s*\/?>/g, "\n") }}
      </h1>
      <div class="flex justify-between">
 <div class="flex  gap-3 pb-6 text-base">
        <span class="font-bold w-16">작성자 ·</span>
        <span>20xx년 xx월 xx일</span>
      </div>

     <HeadlessMenu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>



          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

      
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1"> 
         <NuxtLink :to="`/`">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
              <BackIcon class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true"/>
               
                이전
              </button>
            </MenuItem>
          </NuxtLink>
              <NuxtLink :to="`/boards/${route.params.boardId}/edit`">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
              
                <EditIcon
                  class="mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                Edit
              </button>
            </MenuItem>
              </NuxtLink>
          </div>
       

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                 @click="DeleteBoard"
              >
                <!-- <DeleteIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                /> -->
                Delete
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </HeadlessMenu>
      </div>
     

      <!--  -->
      <!--  -->
      <!--  -->
 
  <!--  -->
  <!--  -->
  <!--  -->
    </section>
    <section class="w-full h-2/3">
      <p id="scrollSettings" class="h-full overflow-scroll text-gray-600 text-xl whitespace-pre-line">
        {{ data?.board.contents.replace(/<br\s*\/?>/g, "\n") }}
      </p>
    </section>
   
  </div>
</template>

<script>
import { onMounted } from "vue";
import usePosts from "../../../components/commons/api.js";
import { useRoute,useRouter } from "vue-router";
import { Menu as HeadlessMenu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
// import { ChevronDownIcon } from '@heroicons/vue/20/solid'
// import ArchiveIcon from './archive-icon.vue'
// import DuplicateIcon from './duplicate-icon.vue'
import EditIcon from '../../../components/svg/EditIcon.vue'
import BackIcon from '../../../components/svg/BackIcon.vue'
// import DeleteIcon from './delete-icon.vue'
export default {
   components: {
     HeadlessMenu,
    MenuButton,
    MenuItems,
    MenuItem,
    BackIcon,
    // ChevronDownIcon,
    // ArchiveIcon,
    // DuplicateIcon,
    // MoveIcon,
    EditIcon,
    // DeleteIcon,
  },
  setup() {
    const route = useRoute();
    const router = useRouter()
    const { fetchBoard ,deleteBoard} = usePosts();
    const data = ref(null);

   

    

    // onMounted 훅을 사용하여 페이지가 로드될 때 게시판 데이터를 가져옴
    // onMounted(async () => {
    //   const boardId = this.$route.params.id; // 동적 라우트 파라미터에서 게시판 ID를 가져옴
    //   board.value = await fetchBoard(boardId);
    // });


    const DeleteBoard = async()=>{
        await deleteBoard(route.params.boardId)
        router.push('/')
   }
    
    onMounted(async () => {
      data.value = await fetchBoard(route.params.boardId);
    });
    
    return {
      data,
      DeleteBoard,
      route,
    
    };
  },
};
</script>

<style scoped>
/*  */
#scrollSettings {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
#scrollSettings::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
</style>
