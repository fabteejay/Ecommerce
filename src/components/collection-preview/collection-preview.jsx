import React from "react";

import "./collection-preview.styles.scss";

export default function collectionpreview({ title, items }) {
  console.log(title, items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, name }) => {
            return <div key={id}>{name}</div>;
          })}
      </div>
    </div>
  );
}
