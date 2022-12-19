import { NavLink } from "solid-app-router";
import { For } from "solid-js";
import styles from "./styles.module.css";

type Props = {
  menu: { label: string; href: string }[];
};

export default function Navigation(props: Props) {
  const { menu } = props;
  return (
    <nav className={styles.nav}>
      <span className={styles.nav__brand}>
        <NavLink href="/">hacker news</NavLink>
      </span>
      <ul>
        <For each={menu}>
          {(item) => (
            <li>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
