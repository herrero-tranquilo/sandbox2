import { RouteDataFuncArgs } from "solid-app-router";
import { createEffect, createResource, on, Resource } from "solid-js";
import { categories, getStoryIdsFromAPI, Story } from "../../apis";
import type { Category, StoryId } from "../../apis";

export type RouteData = { stories: Resource<StoryId[]> };

function isVailedCategory(category: string) {
  return categories.includes(category as Category);
}

function desc(a: number, b: number) {
  return a - b;
}

export default function PageData(props: RouteDataFuncArgs): RouteData {
  const { params, location, navigate, data } = props;
  if (!isVailedCategory(params.stories)) navigate("/404", { replace: true });

  const [stories, { mutate, refetch }] = createResource<StoryId[], Category>(
    () => params.stories as Category,
    getStoryIdsFromAPI,
    { initialValue: [] }
  );
  mutate(stories()?.sort(desc));
  return { stories } as RouteData;
}
