import IRepositories from "./interfaces/IRepositories";
import IUseCases from "./interfaces/IUseCases";
import Session from "~/core/domains/useCases/Session";
import Board from "~/core/domains/useCases/Board";

export default (repositories: IRepositories): IUseCases => {
  return {
    board: new Board(repositories.board),
    session: new Session(repositories.session),
  };
};
