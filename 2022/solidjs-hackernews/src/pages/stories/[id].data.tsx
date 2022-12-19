import { Params, RouteDataFuncArgs } from "solid-app-router";
import {
  Accessor,
  createEffect,
  createMemo,
  createResource as createResource,
  createSignal,
  on,
  Resource,
} from "solid-js";
import { getStoryFromAPI } from "../../apis";
import type { Story } from "../../apis";

export type RouteData = {
  story: Resource<Story>;
  timestampToDateformat: (timestamp: number) => string;
};

function getId(params: Params): Accessor<string> {
  return createMemo(() => params.id);
}

function isValiedStoryId(id: Accessor<string>) {
  return id && !isNaN(parseInt(id()));
}

function timestampToDateformat(timestamp: number) {
  // ...
  return new Date(timestamp).toString();
}

export default function PageData(props: RouteDataFuncArgs) {
  const { params, location, navigate, data } = props;
  if (!isValiedStoryId(getId(params))) navigate("/", { replace: true });

  const [story, { mutate, refetch }] = createResource<Story, string>(
    getId(params),
    async (id) => {
      return await getStoryFromAPI(id);
    },
    { initialValue: {} as Story }
  );

  return { story, timestampToDateformat } as RouteData;
}
