import React from "react";

export default function useFilter(items, input, ...states) {
  const filterObject = {
    add: (item) => item,
    search: (item) => item.title.includes(input),
    all: (item) => item,
    active: (item) => item.checked === false,
    completed: (item) => item.checked !== false,
  };

  const filter = (items, currCondition, ...nextConditions) => {
    const filteredItems = items.filter(currCondition);
    return nextConditions.length
      ? filter(filteredItems, ...nextConditions)
      : filteredItems;
  };

  const consditions = [...states.map((state) => filterObject[state])];
  const filteredItems = filter(items, ...consditions);

  return [filteredItems];
}
