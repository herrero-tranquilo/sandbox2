import Store from "~~/server/store";

export default defineEventHandler(async () => {
  return {
    comments: Array.from(Store.comments),
  };
});
