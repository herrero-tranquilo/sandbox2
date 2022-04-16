function hello() {
  return "hello!";
}

export const resolvers = {
  Query: {
    hello,
  },
};
