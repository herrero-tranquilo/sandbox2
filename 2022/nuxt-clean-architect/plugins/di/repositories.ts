import IRepositories from "./interfaces/IRepositories";
import IInfrastructures from "./interfaces/IInfrastructures";
import SessionRepository from "~/core/adapters/repositories/Session";
import BoardRepository from "~/core/adapters/repositories/Board";

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
    board: new BoardRepository(infrastructure.http, infrastructure.storage),
  };
};
