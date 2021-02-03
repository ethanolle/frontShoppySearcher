import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultGrid from "../../components/ResultsGrid/ResultsGrid";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <SearchBar />
      <ResultGrid />
    </div>
  );
};

export default Search;
