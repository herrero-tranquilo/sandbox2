import React from "react";

export default function Item({ id, title, checked, onChange = () => null }) {
  return (
    <li>
      <input type="checkbox" checked={checked} onChange={() => onChange(id)} />
      {title}
    </li>
  );
}
