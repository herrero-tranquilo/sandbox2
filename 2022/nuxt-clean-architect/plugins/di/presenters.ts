import IUseCases from "./interfaces/iUseCases";
import BoardPresenter from "~/core/adapters/presenters/Board";
import SessionPresenter from "~/core/adapters/presenters/Session";

export default (useCases: IUseCases) => {
  return {
    board: new BoardPresenter(useCases.board),
    session: new SessionPresenter(useCases.session),
  };
};
