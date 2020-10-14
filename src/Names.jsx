import React from "react";

const Names = ({ babyNames, handleSetFavorites }) => {
  const orderedArr = babyNames.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  function handleListInToFavorites(e){
    const nameId = e.target.innerText;
    handleSetFavorites(nameId);
  }

  return (
    <div className="name-container">
      {orderedArr.map((name) => (
        <button
          onClick={handleListInToFavorites}
          //value={favorites}
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
