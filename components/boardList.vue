<template>
  <div class="w-full flex justify-center">
    <!--  -->
    <!--  -->
    <!--  -->

    <ul role="list" class="divide-y divide-gray-100 w-full">
      <board-item v-for="(board, i) in boards" :key="i" :board="board" :i="i" />
      <!--  -->
      <!--  -->
      <!-- <li
        v-for="person in people"
        :key="person.email"
        class="flex justify-between gap-x-6 py-5"
      >
        <div class="flex gap-x-4">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ person.name }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {{ person.email }}
            </p>
          </div>
        </div>
        <div class="hidden sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
          <p
            v-if="person.lastSeen"
            class="mt-1 text-xs leading-5 text-gray-500"
          >
            Last seen
            <time :datetime="person.lastSeenDateTime">{{
              person.lastSeen
            }}</time>
          </p>
          <div v-else class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p class="text-xs leading-5 text-gray-500">Online</p>
          </div>
        </div>
      </li> -->

      <!--  -->
      <!--  -->
    </ul>

    <!--  -->
    <!--  -->
    <!--  -->

    <!-- <table class="w-full border-collapse table-fixed">
      <thead>
        <tr>
          <th class="w-1/12 border-y-2 border-green-800 px-4">번호</th>
          <th class="w-2/12 border-y-2 border-green-800 px-4 py-2">제목</th>
          <th class="w-3/5 border-y-2 border-green-800 px-6 py-4">내용</th>
        </tr>
      </thead>
      <tbody>
        <board-item
          v-for="(board, i) in boards"
          :key="i"
          :board="board"
          :i="i"
        />
      </tbody>
    </table> -->
  </div>
</template>

<script>
import boardItem from "./boardItem.vue";
import usePost from "./commons/api.js";
export default {
  components: { boardItem },
  setup() {
    const { boards } = usePost();
    const people = [
      {
        name: "Leslie Alexander",
        email: "leslie.alexander@example.com",
        role: "Co-Founder / CEO",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
        name: "Michael Foster",
        email: "michael.foster@example.com",
        role: "Co-Founder / CTO",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
        name: "Dries Vincent",
        email: "dries.vincent@example.com",
        role: "Business Relations",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: null,
      },
      {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        role: "Front-end Developer",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
        name: "Courtney Henry",
        email: "courtney.henry@example.com",
        role: "Designer",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
        name: "Tom Cook",
        email: "tom.cook@example.com",
        role: "Director of Product",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: null,
      },
    ];
    return {
      boards,
      people,
    };
  },
};
</script>

<style></style>
