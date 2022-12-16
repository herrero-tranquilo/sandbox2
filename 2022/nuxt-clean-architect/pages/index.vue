<template>
  <section>
    <div v-for="board in boardsVM" :key="board.id">
      <p>#{{ board.id }} {{ board.author }}</p>
      <ul>
        <li v-for="taggedComment in board.taggedComments" :key="taggedComment">
          {{ taggedComment }}
        </li>
      </ul>
      <input
        type="text"
        v-model="boardForm.comment"
        @click="boardForm.id = board.id"
      />
      <button @click="handleInsertComment">Add Comment</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import BoardVM from "~~/core/domains/viewmodel/Board";

const { data: boards } = await useAsyncData(
  ({ $di: { board } }) => board.getBoards(),
  {
    server: true,
    initialCache: false,
    default: () => [],
    transform: (boards) => boards.map((board) => JSON.stringify(board)),
  }
);

const { execute: insertComment } = await useAsyncData(
  ({ $di: { board } }) =>
    board.insertComment(
      boardForm.value.id,
      boardForm.value.author,
      boardForm.value.comment
    ),
  {
    server: false,
    immediate: false,
  }
);

const boardsVM = computed(() =>
  boards.value.map((board) => BoardVM.fromJSON(board))
);

const boardForm = ref({
  id: undefined,
  author: "author",
  comment: "",
});

async function handleInsertComment() {
  await insertComment();
}
</script>
