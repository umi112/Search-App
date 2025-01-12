import React, { useState, useEffect } from 'react';
import './Imagesearch.css'

const ImageSearch = () => {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const API_KEY = "jTUxzUm4dHCjZZj6f9tnqavwE-vpxGxAATh-jAo9dVk";

  
  
  const myFun = async () => {
    const get = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`);
    const jsonData = await get.json();
    setData(jsonData.results); // images ka data hamre pas hota ha results mn so
  }


function handleClick(){
  myFun();
}

  return (
    <div className="container">
      <h1>Image Search APP</h1>
      <div className="inputs">
        <input 
          type="text" 
          placeholder="Search Images..." 
          className="input" 
          onChange={handleSearch} 
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="images">
        {data.map((curVal, index) => {
          
          return (
            <img src={curVal.urls.full}  />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSearch;
