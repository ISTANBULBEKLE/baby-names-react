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
        value={inputValue}
        onChange={handleSearch}
        type="text"
        placeholder="search for baby name"
      />
    </div>
  );
};

export default SearchBar;
