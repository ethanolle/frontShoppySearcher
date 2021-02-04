import React, { useState, useEffect } from "react";
import ResultGrid from "../../components/ResultsGrid/ResultsGrid";
import "./Search.css";

const Search = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Product
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default Search;
