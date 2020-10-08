import React from "react";

const Names = ({ babyNames }) => {
  const orderedArr = babyNames.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  return (
    <div className="name-container">
      {orderedArr.map((name) => (
        <button
          key={name.id}
          className={name.sex === "f" ? "pink-class" : "blue-class"}
        >
          {name.name}
        </button>
      ))}
    </div>
  );
};

export default Names;
