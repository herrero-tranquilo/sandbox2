import IPresenters from "./interfaces/IPresenters";
import infrastructures from "./infrastructures";
import repositories from "./repositories";
import useCases from "./useCases";
import presenters from "./presenters";
import NuxtStateStorage from "./nuxtStateStorage";

import { STORAGE_KEY } from "./constants";

export default defineNuxtPlugin(() => {
  const cInfrastructures = infrastructures({
    httpClient: $fetch,
    storage: new NuxtStateStorage(STORAGE_KEY),
  });
  const cRepositories = repositories(cInfrastructures);
  const cUseCases = useCases(cRepositories);
  const cPresenters = presenters(cUseCases);

  return {
    provide: {
      di: {
        board: cPresenters.board,
        session: cPresenters.session,
      } as IPresenters,
    },
  };
});
