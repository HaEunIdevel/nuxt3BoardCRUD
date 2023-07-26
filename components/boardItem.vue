<template>
  <tr class="h-16 text-center hover:bg-gray-100">
    <td class="border-b-2 border-green-800 px-4 py-2">{{ i + 1 }}</td>
    <td class="border-b-2 border-green-800 truncate px-4 py-2">
      <NuxtLink :to="`/boards/${board._id}`"
        >{{ board.title.replace(/<br\s*[\/]?>/gi, '\r\n') }}</NuxtLink
      >
    </td>
    <td class="border-b-2 border-green-800 truncate px-4 py-2">
      <NuxtLink :to="`/boards/${board._id}`"> {{ board.contents.replace(/<br\s*[\/]?>/gi, '\r\n') }}</NuxtLink>
    </td>
  </tr>
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
