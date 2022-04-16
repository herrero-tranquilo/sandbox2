import React from "react";

export default function List({items=[], render}) {
  return (
        <ul>
            {items.map(render)}
        </ul>
         );
}
