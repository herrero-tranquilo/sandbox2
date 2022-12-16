import { ISessionRepository } from "~~/core/domains/usecases/interfaces-repository/ISession";
import { IBoardRepository } from "~~/core/domains/usecases/interfaces-repository/IBoard";

export default interface IRepositories {
  session: ISessionRepository;
  board: IBoardRepository;
}
