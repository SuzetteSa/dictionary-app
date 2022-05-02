import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
      setLoaded(true);
       Search();
  }

  if (loaded) {
      return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">Search for a word.....</div>
      </section>
      <Results results={results} />
    </div>
  );

} else {
      load();
      return "Loading...";
  }
}
