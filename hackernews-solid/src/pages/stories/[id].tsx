import { Link, useNavigate, useRouteData } from "solid-app-router";
import { ErrorBoundary, For, Match, Show, Suspense, Switch } from "solid-js";
import { RouteData } from "./[id].data";
import Heading from "../../components/Heading";
import styles from "./styles.module.css";

const handleError = (error: any) => {
  const navigate = useNavigate();
  navigate("/404");
  return <></>;
};

export default function Page() {
  const { story, timestampToDateformat } = useRouteData<RouteData>();
  const title = () => story()["title"] || "";
  const by = () => story()["by"] || "";
  const heading = () => `${title()} ${by() && `by.${by()}`}`;
  const score = () => story()["score"] || 0;
  return (
    <ErrorBoundary fallback={handleError}>
      <Heading heading={heading} score={score} />
      <Show when={story()["time"]}>
        <p className={styles.time}>{timestampToDateformat(story()["time"])}</p>
      </Show>

      <Show when={story()["text"]}>
        <p className={styles.text} innerHTML={story()["text"]}></p>
      </Show>

      <Show when={story()["url"]}>
        <p className={styles.url}>
          <a href={story()["url"]}>{story()["url"]}</a>
        </p>
      </Show>

      <Show when={story()["descendants"]}>
        <p className={styles.descendants}>
          {story()["descendants"]} descendants
        </p>
      </Show>
      <Show when={story()["kids"]}>
        <hr className={styles.endline} />
        <ul className={styles.kids}>
          <For each={story()["kids"]}>
            {(kid) => (
              <li>
                <Link href={`/stories/${kid}`}>{kid}</Link>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </ErrorBoundary>
  );
}
