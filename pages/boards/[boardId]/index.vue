<template>
  <div class="w-full flex flex-col items-center mx-auto">
    <section class="w-full   mb-12 whitespace-pre-line">
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
          class="inline-flex w-full justify-center px-4 py-2 text-sm font-medium "
        >
        <VerticalEllipsis/>
        </MenuButton>
      </div>
      <transition
         enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1"> 
            <MenuItem v-slot="{ active }">
         <NuxtLink :to="`/`">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
              <BackIcon class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true"/>
               
                이전
              </button>
          </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink :to="`/boards/${route.params.boardId}/edit`">
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
              </NuxtLink>
            </MenuItem>
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
                <DeleteIcon
                  class="mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                Delete
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </HeadlessMenu>
      </div>

    </section>
    <section class="w-full ">
      <p id="scrollSettings" class="h-full text-gray-600 text-xl whitespace-pre-line">
        {{ data?.board.contents.replace(/<br\s*\/?>/g, "\n") }}
      </p>
    </section>
   
  </div>
</template>

<script>
import { onMounted } from "vue";
import usePosts from "../../../components/commons/api.js";
import { useRoute } from "vue-router";
import { Menu as HeadlessMenu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import EditIcon from '../../../components/svg/EditIcon.vue'
import BackIcon from '../../../components/svg/BackIcon.vue'
import DeleteIcon from '../../../components/svg/DeleteIcon.vue'
import VerticalEllipsis from '../../../components/svg/EllipsisVertical.vue'
export default {
   components: {
     HeadlessMenu,
    MenuButton,
    MenuItems,
    MenuItem,
    BackIcon,
   VerticalEllipsis,
    EditIcon,
    DeleteIcon,
  },
  setup() {
    const route = useRoute();
    const { fetchBoard ,deleteBoard} = usePosts();
    const data = ref(null);
    const DeleteBoard = async()=>{
        await deleteBoard(route.params.boardId)
        
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

<style >
/*  */

</style>
