import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultGrid from '../../components/ResultsGrid/ResultsGrid';
import './Search.css';

const Search = (props) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    getDataFromBackend(input);
  };

  const getDataFromBackend = (product) => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/shoppy/getShoppyLinks',
      data: {
        product: product,
      },
    }).then((res) => {
      let links = res.data.shoppyLinks;
      setResponse(links);
      setLoading(false);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='textSearch'>Shoppy Scrapper</label>
        <input
          className='inputText'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          className={loading ? 'searchButtonLoading' : 'searchButton'}
          type='submit'
          value='Submit'
          disabled={loading}
        />
        <div className={loading ? 'lds-dual-ring' : ''}></div>
      </form>
      <ResultGrid resultGrid={response} />
    </div>
  );
};

export default Search;
