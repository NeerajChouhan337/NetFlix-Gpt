import React from "react";
import GptSearchBar from "./GptSearchBar";
import { Bg_Image } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen md:h-auto object-cover"
          src={Bg_Image}
          alt="bg-image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
