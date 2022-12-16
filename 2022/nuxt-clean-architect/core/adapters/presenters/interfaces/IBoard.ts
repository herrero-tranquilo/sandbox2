import { IBoardEntity } from "~~/core/domains/aggregates/interfaces/IBoard";

export interface IBoardPresenter {
  getBoards(): Promise<Array<IBoardEntity>>;
  insertBoard(author: string, content: string): Promise<boolean>;
  insertComment(
    boardId: number,
    author: string,
    content: string
  ): Promise<boolean>;
}
