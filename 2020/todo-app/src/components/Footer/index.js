import React from "react";
import Button from "../Button";
import style from "./style.module.scss";

export default function Footer({ setInputState, setFilterState }) {
  const setSearch = () => {
    setInputState({ state: "search" });
  };
  const setAdd = () => {
    setInputState({ state: "add" });
  };
  const setAll = () => {
    setFilterState({ state: "all" });
  };
  const setActive = () => {
    setFilterState({ state: "active" });
  };
  const setCompleted = () => {
    setFilterState({ state: "completed" });
  };
  return (
    <footer className={style.Footer}>
      <div>
        <Button title="추가" onClick={setAdd} />
        <Button title="검색" onClick={setSearch} />
      </div>
      <div>
        <Button title="All" onClick={setAll} />
        <Button title="Active" onClick={setActive} />
        <Button title="Completed" onClick={setCompleted} />
      </div>
    </footer>
  );
}
