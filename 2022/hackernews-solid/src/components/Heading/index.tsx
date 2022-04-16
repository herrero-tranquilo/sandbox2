import styles from "./styles.module.css";
import Badge from "../Badge";
import { Show } from "solid-js";

type Props = {
  heading: () => string;
  score: () => string | number;
};
export default function Heading(props: Props) {
  const { heading, score } = props;
  return (
    <header className={styles.header}>
      <h2>{heading()}</h2>
      <Show when={score()}>
        <Badge text={score} />
      </Show>
    </header>
  );
}
