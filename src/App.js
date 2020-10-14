import React, { useState } from "react";
import "./App.css";
import Names from "./Names";
import SearchBar from "./SearchBar";
import BabyNames from "./BabyNames.json";
import Favorites from "./Favorites";

function App() {
  const orderedArr = BabyNames.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  const [babyNames, setBabyNames] = useState(orderedArr);

  function handleFilter(input) {
    setBabyNames(
      orderedArr.filter((babyName) =>
        babyName.name.toLowerCase().includes(input)
      )
    );
  }

  const [favorites, setFavorites] = useState([]);

  function handleSetFavorites(nameId) {
   setFavorites([...favorites, orderedArr.find((n)=>n.name === nameId) ]);
  setBabyNames(babyNames.filter(n => n.name !==nameId))
  }


  function handleReverseNames(itemName) {
   setBabyNames([...babyNames, orderedArr.find((n)=>n.name === itemName) ]);
  setFavorites(favorites.filter(n => n.name !== itemName));
  }
  return (
    <div className="App">
      <div>
        <p className="main-p">List of Baby Girls and Boys</p>
        <hr></hr>
        <SearchBar handleFilter={handleFilter} />
        <hr></hr>
        <Favorites
          handleReverseNames={handleReverseNames}
          babyNames={favorites}
        />
        <hr></hr>
        <Names handleSetFavorites={handleSetFavorites}
         babyNames={babyNames} />
      </div>
    </div>
  );
}

export default App;
