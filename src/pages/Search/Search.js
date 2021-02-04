import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultGrid from "../../components/ResultsGrid/ResultsGrid";
import "./Search.css";

const Search = (props) => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [test, setTest] = useState(["a", "b", "c"]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`${input}`);
    setResponse(getDataFromBackend());
  };

  const getDataFromBackend = (product) => {
    // axios({
    //   method: "post",
    //   url: "/login",
    //   data: {
    //     product: product,
    //   },
    // });
    return "test";
  };

  return (
    <div>
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
      <h1>{response}</h1>
      <ResultGrid resultGrid={test} />
    </div>
  );
};

export default Search;
