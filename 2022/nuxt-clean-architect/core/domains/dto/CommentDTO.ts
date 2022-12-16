export interface ICommentParams {
  id: number;
  boardId: number;
  author: string;
  content: string;
  createAt: Date;
}

export interface ICommentDTO {
  readonly id: number;
  readonly boardId: number;
  readonly author: string;
  readonly content: string;
  readonly createAt: Date;
}

class CommentDTO implements ICommentDTO {
  readonly id: number;
  readonly boardId: number;
  readonly author: string;
  readonly content: string;
  readonly createAt: Date;

  constructor(params: ICommentParams) {
    this.id = params.id;
    this.boardId = params.boardId;
    this.author = params.author;
    this.content = params.content;
    this.createAt = params.createAt;
  }

  toJSON() {
    return { ...this };
  }

  static fromJSON(json: string) {
    const commit = Object.create(CommentDTO.prototype);

    return Object.assign(commit, JSON.parse(json));
  }
}

export default CommentDTO;
