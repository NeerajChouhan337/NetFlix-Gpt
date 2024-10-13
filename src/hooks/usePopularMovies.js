import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );
    const data = await res.json();
    // console.log(data.results)

    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
