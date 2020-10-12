import React, { useState } from "react";

const Names = ({ babyNames }) => {
  const orderedArr = babyNames.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );
  const [favorites, setFavorites] = useState([]);

  function handleClick(e) {
    console.log("button clicked," + e.target.value);
    setFavorites((prevNames)=>[...prevNames, e.target.value]);
  }

  return (
    <div className="name-container">
      {orderedArr.map((name) => (
        <button
          onClick={handleClick}
          value={favorites}
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
