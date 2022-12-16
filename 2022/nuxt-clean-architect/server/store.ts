class CustomSet<T extends { id: number }> extends Set<T> {
  nextId(): number {
    if (!this.size) return 0;
    return this.toArray()[this.size - 1].id + 1;
  }
  toArray() {
    return Array.from(this);
  }
  add(value: T): this {
    super.add(value);
    return this;
  }
}

const boards = new CustomSet([
  {
    id: 1,
    author: "test",
    content: "hello",
    createAt: new Date(),
  },
  {
    id: 2,
    author: "test",
    content: "world",
    createAt: new Date(),
  },
]);

const comments = new CustomSet([
  {
    id: 1,
    boardId: 1,
    author: "test",
    content: "hello comment",
    createAt: new Date(),
  },
  {
    id: 2,
    boardId: 2,
    author: "test1",
    content: "hello comment1",
    createAt: new Date(),
  },
]);

export default { boards, comments };
