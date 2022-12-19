import { For, Suspense } from "solid-js";
import { useRouteData, Link } from "solid-app-router";
import type { RouteData } from "./index.data";
import styles from "./styles.module.css";

export default function Page() {
  const { stories } = useRouteData<RouteData>();
  return (
    <>
      <Suspense fallback={<div className={styles.loading}>...loading</div>}>
        <ul>
          <For each={stories()}>
            {(storyId) => (
              <li className={styles.row}>
                <Link href={`/stories/${storyId}`}>{storyId}</Link>
              </li>
            )}
          </For>
        </ul>
      </Suspense>
    </>
  );
}
