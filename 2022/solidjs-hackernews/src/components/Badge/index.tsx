import styles from "./styles.module.css";

type Props = {
  text: () => string | number;
};
export default function Badge(props: Props) {
  const { text } = props;
  return <span className={styles.badge}>{text()}</span>;
}
