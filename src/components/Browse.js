
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainConatiner from "./MainConatiner";
import SecondContainer from "./SecondContainer";


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainConatiner/>
      <SecondContainer/>
    </div>
  );
};

export default Browse;
