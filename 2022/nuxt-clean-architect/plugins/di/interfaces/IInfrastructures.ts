import { IHttp } from "core/adapters/infrastructures/interfaces/IHttp";
import { IStorage } from "core/adapters/infrastructures/interfaces/IStorage";

export default interface IInfrastructures {
  http: IHttp;
  storage: IStorage;
}
