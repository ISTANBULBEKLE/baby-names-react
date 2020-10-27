import React, { useState } from "react";

const SearchBar = ({ handleFilter }) => {
  
  const [inputValue, setInputValue] = useState("");

  function handleSearch(e) {
    setInputValue();
    handleFilter(e.target.value.toLowerCase());
  }

  return (
    <div>
      <input
        size='30'
        value={inputValue}
        onChange={handleSearch}
        type="text"
        placeholder="SEARCH FOR BABY NAMES"
      />
    </div>
  );
};

export default SearchBar;
