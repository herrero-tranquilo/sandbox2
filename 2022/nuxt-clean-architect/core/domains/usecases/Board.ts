import Board from "../../domains/aggregates/Board";
import Comment from "../../domains/entities/Comment";
import { IBoardUseCase } from "../../domains/usecases/interfaces/IBoard";
import { IBoardRepository } from "./interfaces-repository/IBoard";
import { IBoardEntity } from "../../domains/aggregates/interfaces/IBoard";

class BoardUseCase implements IBoardUseCase {
  constructor(private readonly boardRepo: IBoardRepository) {}

  async getBoards(): Promise<Array<IBoardEntity>> {
    const boardDTOList = await this.boardRepo.getBoards();
    const commentDTOList = await this.boardRepo.getComments();
    return boardDTOList.map((board) => {
      const comments = commentDTOList
        .filter((comment) => comment.boardId === board.id)
        .map((comment) => new Comment(comment));
      const boardEntity = new Board(board).pushComment(comments);
      return boardEntity;
    });
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.boardRepo.insertBoard(author, content);
  }

  insertComment(
    boardId: number,
    author: string,
    content: string
  ): Promise<boolean> {
    return this.boardRepo.insertComment(boardId, author, content);
  }
}

export default BoardUseCase;
