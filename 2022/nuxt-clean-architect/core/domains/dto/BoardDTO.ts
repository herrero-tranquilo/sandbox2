export interface IBoardParams {
  id: number;
  author: string;
  content: string;
  createAt: Date;
}

export interface IBoardDTO {
  readonly id: number;
  readonly author: string;
  readonly content: string;
  readonly createAt: Date;
}

class BoardDTO implements IBoardDTO {
  readonly id: number;
  readonly author: string;
  readonly content: string;
  readonly createAt: Date;

  constructor(params: IBoardParams) {
    this.id = params.id;
    this.author = params.author;
    this.content = params.content;
    this.createAt = params.createAt;
  }

  toJSON() {
    return { ...this };
  }

  static fromJSON(json: string) {
    const commit = Object.create(BoardDTO.prototype);

    return Object.assign(commit, JSON.parse(json));
  }
}

export default BoardDTO;
