import React, { useState } from "react";
import axios from "axios";
import ResultGrid from "../../components/ResultsGrid/ResultsGrid";
import "./Search.css";

const Search = (props) => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`${input}`);
    getDataFromBackend(input);
  };

  const getDataFromBackend = (product) => {
    console.log("in function");
    axios({
      method: "post",
      url: "http://localhost:5000/shoppy/getShoppyLinks",
      data: {
        product: product,
      },
    }).then((res) => {
      console.log(res);
      let links = res.data.shoppyLinks;
      console.log(links);
      setResponse(links);
    });
    // return "test";
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
      <ResultGrid resultGrid={response} />
    </div>
  );
};

export default Search;
