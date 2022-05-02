import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function pexelsHandleResponse(response) {
    setPhotos(response.data.photos);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000187850b6b0334487d89a4aa781445f2b9";
      let pexelsApiUrl =
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      let headers= { Authorization: `Bearer ${pexelsApiKey}` }

         axios.get(pexelsApiUrl, {headers: headers,}).then(pexelsHandleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
//({headers: {"Authorization": `Beaere ${tokenStr}`} });
  function load() {
      setLoaded(true);
       Search();
  }

  if (loaded) {
      return (
    <div className="Dictionary">
        
      <section>
          <h1>What word do you want to look for?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">Search for a word.....</div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );

} else {
      load();
      return "Loading...";
  }
}
