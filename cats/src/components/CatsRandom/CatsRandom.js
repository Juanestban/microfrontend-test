import React, { useState, useEffect } from "react";

import "./cats.css";

export const CatsRandom = () => {
  const [randomCatImg, setRandomCatImg] = useState(null);

  const fetchRandomCat = async () => {
    try {
      setRandomCatImg("");
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search`
      );
      const res = await response.json();
      setRandomCatImg(res[0].url);
    } catch {
      console.error("error");
    }
  };

  useEffect(() => {
    if (randomCatImg === null) {
      fetchRandomCat();
    }
  });

  return (
    <header style={{ border: "1px solid #01f" }}>
      <h3>Cat of the day</h3>
      <div>
        <button className="buttonCats" onClick={() => fetchRandomCat()}>
          New Cat
        </button>
      </div>
      {randomCatImg !== "" ? (
        <div>
          <img src={randomCatImg} width="400px" alt="Cat" />
        </div>
      ) : (
        <div>Loading Image</div>
      )}
    </header>
  );
};
