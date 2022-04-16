import React, { useState, useEffect } from "react";
import Header from "../Header";
import List from "../List";
import Item from "../Item";
import Footer from "../Footer";

export default function App() {
  const [appState, setAppState] = useState({
    state: "search",
    filter: "all",
  });

  const [input, setInput] = useState("");

  const [items, setItems] = useState([
    { id: 1, title: "todo1", checked: false },
    { id: 2, title: "todo2", checked: true },
  ]);

  const filter = (items, currCondition, ...nextConditions) => {
    const filteredItems = items.filter(currCondition);
    return nextConditions.length
      ? filter(filteredItems, ...nextConditions)
      : filteredItems;
  };

  const filterObject = {
    add: (item) => item,
    search: (item) => item.title.includes(input),
    all: (item) => item,
    active: (item) => item.checked === false,
    completed: (item) => item.checked !== false,
  };

  const consditions = [
    filterObject[appState.state],
    filterObject[appState.filter],
  ];

  const filteredItems = filter(items, ...consditions);

  const addItem = (e) => {
    (e.key === "Enter") & (appState.state === "add") &&
      setItems([
        ...items,
        {
          id: items.length + 1,
          title: e.target.value,
          checked: false,
        },
      ]);
  };

  const changeInputValue = (e) => {
    setInput(e.target.value);
  };

  const setInputState = ({ state }) => {
    setAppState({ ...appState, state: state });
  };

  const setFilterState = ({ state }) => {
    setAppState({ ...appState, filter: state });
  };

  const changeItemState = (id) => {
    const newItems = [...items];
    newItems.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(newItems);
  };

  const inputConfig = {
    placeholder: appState.state,
    value: input,
    onChange: changeInputValue,
    onKeyUp: addItem,
  };

  return (
    <div>
      <Header />
      <input {...inputConfig} />
      <div>{appState.filter}</div>
      <List
        items={filteredItems}
        render={({ id, title, checked }) => (
          <Item
            key={title + id}
            id={id}
            title={title}
            onChange={changeItemState}
            checked={checked}
          />
        )}
      />
      <Footer setInputState={setInputState} setFilterState={setFilterState} />
    </div>
  );
}
