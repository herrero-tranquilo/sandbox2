import { IBoardRepository } from "../../domains/usecases/interfaces-repository/IBoard";
import BoardDTO, { IBoardDTO, IBoardParams } from "../../domains/dto/BoardDTO";
import CommentDTO, {
  ICommentDTO,
  ICommentParams,
} from "../../domains/dto/CommentDTO";
import { IHttp } from "../../adapters/infrastructures/interfaces/IHttp";
import { IStorage } from "../../adapters/infrastructures/interfaces/IStorage";

class BoardRepository implements IBoardRepository {
  constructor(
    private readonly http: IHttp,
    private readonly storage: IStorage
  ) {}

  async getBoards(): Promise<Array<IBoardDTO>> {
    const response = await this.http.request<{ boards: IBoardParams[] }>({
      method: "GET",
      url: "http://localhost:3000/api/boards",
    });
    const boardDTOList = response.boards.map((board) => new BoardDTO(board));
    return boardDTOList;
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.http.request({
      method: "POST",
      url: "http://localhost:3000/api/boards",
      headers: {
        "Content-Type": "application/json",
      },
      body: { author, content },
    });
  }

  async getComments(): Promise<Array<ICommentDTO>> {
    const response = await this.http.request<{ comments: ICommentParams[] }>({
      method: "GET",
      url: "http://localhost:3000/api/comments",
    });

    return response.comments.map(
      (comment: ICommentParams) => new CommentDTO(comment)
    );
  }

  async insertComment(
    boardId: number,
    author: string,
    content: string
  ): Promise<boolean> {
    const response = await this.http.request({
      method: "POST",
      url: "http://localhost:3000/api/comments",
      headers: {
        "Content-Type": "application/json",
      },
      body: { boardId, author, content },
    });
    return response;
  }
}

export default BoardRepository;
