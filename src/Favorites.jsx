import React from "react";

const Favorites = ({ babyNames, handleReverseNames }) => {
  const orderedArr = babyNames.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  function handleReverseFavorite (e){
    const itemName = e.target.innerText;
    handleReverseNames(itemName);
  }

  return (
    <div className="favorites">
      <p>My favorite names. </p>
      <hr></hr>
      <span>Pick your names from the below list!</span>
      <br></br>
      {orderedArr.map((n) => (
        <button
          onClick={handleReverseFavorite}
          className={n.sex === "f" ? "pink-class" : "blue-class"}
        >
          {n.name}
        </button>
      ))}
    </div>
  );
};

export default Favorites;
