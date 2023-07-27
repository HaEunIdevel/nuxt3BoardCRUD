<template>

 <li class="flex flex-col gap-4 lg:p-4 p-2  rounded-lg m-2 w-full">


            <NuxtLink :to="`/boards/${board._id}`" class="flex items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg"
            
            >

                <div class="lg:flex md:flex items-center">
                <div class="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3"></div>

                <div class="flex flex-col">

                    <div class="text-sm leading-3 text-gray-700 font-bold w-full">{{ board.title.replace(/<br\s*[\/]?>/gi, '\r\n') }}
      </div>

                    <div class="text-xs text-gray-600 w-full">20xx.xx.xx, 작성자</div>
                
                </div>

                </div>

                <svg class="h-6 w-6 mr-1 invisible md:visible lg:visible xl:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                
            </NuxtLink>
                
        </li>
            
      
<!--  -->
<!--  -->
<!--  -->
<!-- <div class="flex justify-between gap-x-6 py-5">
 <div class=" flex gap-x-4">
 <div class="min-w-0 flex-auto">
   <p class="border-b-2truncate px-4 py-2">
      <NuxtLink :to="`/boards/${board._id}`"
        >{{ board.title.replace(/<br\s*[\/]?>/gi, '\r\n') }}</NuxtLink
      >
    </p>
     <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              작성자이름
            </p>
 </div>
  
 </div> -->
 <!-- <div class="hidden sm:flex sm:flex-col sm:items-end"> -->
  <!-- <p class="border-b-2 border-green-800 truncate px-4 py-2">
      <NuxtLink :to="`/boards/${board._id}`"> {{ board.contents.replace(/<br\s*[\/]?>/gi, '\r\n') }}</NuxtLink>
    </p> -->
 <!-- </div> -->

<!-- </div> -->


















<!--  -->
<!--  -->
<!--  -->
  <!-- <tr class="h-16 text-center hover:bg-gray-100">
    <td class="border-b-2 border-green-800 px-4 py-2">{{ i + 1 }}</td>
   
  
  </tr> -->
</template>

<script>
export default {
  props: {
    board: {
      type: Object,
      required: true,
    },
    i: {
      type: Number,
      required: true,
    },
  },

};
</script>

<style></style>
