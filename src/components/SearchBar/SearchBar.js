import React from "react";
import "./SearchBar.css";
const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      className='inputBar'
      key='random1'
      value={keyword}
      placeholder={"search a Product"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
