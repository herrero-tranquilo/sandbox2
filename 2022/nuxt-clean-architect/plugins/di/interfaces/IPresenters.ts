import { ISessionPresenter } from "core/adapters/presenters/interfaces/ISession";
import { IBoardPresenter } from "core/adapters/presenters/interfaces/IBoard";

export default interface IPresenters {
  session: ISessionPresenter;
  board: IBoardPresenter;
}
