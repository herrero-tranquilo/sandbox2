import { IBoardEntity } from "../../../domains/aggregates/interfaces/IBoard";
import { ICommentEntity } from "../../entities/interfaces/IComment";

export interface IBoardUseCase {
  getBoards(): Promise<Array<IBoardEntity>>;
  insertBoard(author: string, content: string): Promise<boolean>;
  insertComment(
    boardId: number,
    author: string,
    content: string
  ): Promise<boolean>;
}
