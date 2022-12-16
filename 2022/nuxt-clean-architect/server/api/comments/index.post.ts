import Store from "~~/server/store";

type Body = {
  boardId: number;
  author: string;
  content: string;
};

export default defineEventHandler(async (event) => {
  const { boardId, author, content } = await readBody<Body>(event);
  if (!Array.from(Store.boards).find(({ id }) => id === boardId))
    return setResponseStatus(404, `can't not found board ID ${boardId}`);

  Store.comments.add({
    id: Store.comments.nextId(),
    boardId,
    author,
    content,
    createAt: new Date(),
  });

  return {
    comments: Array.from(Store.comments),
  };
});
