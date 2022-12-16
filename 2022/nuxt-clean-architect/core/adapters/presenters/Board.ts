import { IBoardPresenter } from "./interfaces/IBoard";
import { IBoardUseCase } from "../../domains/useCases/interfaces/IBoard";
import { IBoardEntity } from "~~/core/domains/aggregates/interfaces/IBoard";

class BoardPresenter implements IBoardPresenter {
  constructor(private readonly useCases: IBoardUseCase) {}

  getBoards(): Promise<Array<IBoardEntity>> {
    return this.useCases.getBoards();
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.useCases.insertBoard(author, content);
  }

  insertComment(
    boardId: number,
    author: string,
    content: string
  ): Promise<boolean> {
    return this.useCases.insertComment(boardId, author, content);
  }
}

export default BoardPresenter;
