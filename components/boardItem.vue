<template>

 <li class="flex flex-col gap-4 lg:p-4 p-2  rounded-lg  w-full">


            <NuxtLink :to="`/boards/${board._id}`" class="flex items-center justify-between w-full p-5  hover:bg-gray-100 cursor-pointer"
            
            >

                <div class="lg:flex md:flex items-center">
                <!-- <div class="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3"></div> -->

                <div class="flex flex-col gap-5">

                    <div class="text-xl leading-3 text-gray-700 font-bold w-full">{{ board.title.replace(/<br\s*[\/]?>/gi, '\r\n') }}
      </div>

                    <div class="text-xs text-gray-600 w-full">작성자 , 20xx.xx.xx</div>
                
                </div>

                </div>
                <div class="flex gap-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>

                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> -->

<div>0</div>
                <!-- <svg class="h-6 w-6 mr-1 invisible md:visible lg:visible xl:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg> -->
                </div>

                
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
