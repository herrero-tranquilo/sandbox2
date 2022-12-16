import { ISessionUseCase } from "core/domains/useCases/interfaces/ISession";
import { IBoardUseCase } from "core/domains/useCases/interfaces/IBoard";

export default interface IUseCases {
  session: ISessionUseCase;
  board: IBoardUseCase;
}
