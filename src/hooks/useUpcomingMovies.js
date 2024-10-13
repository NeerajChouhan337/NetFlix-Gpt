import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const data = await res.json();
    // console.log(data.results)

    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
