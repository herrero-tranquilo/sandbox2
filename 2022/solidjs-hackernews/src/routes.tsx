import { lazy } from "solid-js";
import { RouteDefinition } from "solid-app-router";
import Layout from "./components/Layout";
import Home from "./pages/home";
import StoriesData from "./pages/[...stories]/index.data";
import StoryData from "./pages/stories/[id].data";
import Stories from "./pages/[...stories]";
import Story from "./pages/stories/[id]";

export default [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/:stories",
        data: StoriesData,
        component: Stories,
      },
      {
        path: "/stories",
        children: [
          {
            path: "/:id",
            data: StoryData,
            component: Story,
          },
        ],
      },
      { path: "/404", component: lazy(() => import("./pages/404")) },
    ],
  },
] as RouteDefinition[];
