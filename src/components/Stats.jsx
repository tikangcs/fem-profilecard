import React from "react";

export default function Stats({ numbers, category }) {
  return (
    <div className="stats__container">
      <div className="stats__numbers">{numbers}</div>
      <div className="stats__category">{category}</div>
    </div>
  );
}
