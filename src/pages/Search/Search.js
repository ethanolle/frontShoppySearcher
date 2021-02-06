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
    axios({
      method: "post",
      url: "http://localhost:5000/shoppy/getShoppyLinks",
      data: {
        product: product,
      },
    }).then((res) => {
      let links = res.data.shoppyLinks;
      setResponse(links);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='textSearch'>Enter Product</label>
        <input
          className='inputText'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input className='searchButton' type='submit' value='Submit' />
      </form>
      <ResultGrid resultGrid={response} />
    </div>
  );
};

export default Search;
