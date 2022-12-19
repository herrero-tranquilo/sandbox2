import { Outlet } from "solid-app-router";
import Navigation from "../Navigation";
import { categories } from "../../apis";
import styles from "./styles.module.css";

export default function Layout() {
  return (
    <>
      <Navigation
        menu={categories.map((category) => ({
          label: category,
          href: `/${category}`,
        }))}
      />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
