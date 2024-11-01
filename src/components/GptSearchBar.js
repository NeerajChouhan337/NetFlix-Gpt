import React, { useRef, useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/genAi";
import { API_OPTION } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import Shimmer from "./Shimmer";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [shimmerVisible, setShimmerVisible] = useState(false);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    setShimmerVisible(true);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movie for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seprated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya ";
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = gptQuery;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const gptMovies = response.text().split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    setShimmerVisible(false)
    // console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    // const gptMovies = response.text().split(",");
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
  };
  return (
    <>
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
       className="w-full md:w-1/2 bg-black grid grid-cols-12 relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg"
          type="submit"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
    {shimmerVisible && <Shimmer/>}
    </>
  );
};

export default GptSearchBar;
