import Store from "~~/server/store";

export default defineEventHandler(async () => {
  return {
    boards: Array.from(Store.boards),
  };
});
