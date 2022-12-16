import IInfrastructures from "./interfaces/IInfrastructures";
import Http from "~/core/adapters/infrastructures/Http";
import WebStorage from "~/core/adapters/infrastructures/WebStorage";

export default ({
  httpClient,
  storage,
}: {
  httpClient: typeof globalThis.$fetch;
  storage: Storage;
}): IInfrastructures => {
  return {
    http: new Http(httpClient),
    storage: new WebStorage(storage),
  };
};
