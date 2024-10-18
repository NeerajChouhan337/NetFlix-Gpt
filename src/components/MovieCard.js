import React from 'react'
import { IMG_CDN_URL, NULL_IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath, title}) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4 transition-transform transform-gpu hover:scale-110">
      {!posterPath ? <img className="w-full h-auto" alt="Movie Card" src={NULL_IMG_URL}  /> :<img className="w-full h-auto" alt="Movie Card" src={IMG_CDN_URL + posterPath} /> }
      {/* <img className="w-full h-auto" alt="Movie Card" src={IMG_CDN_URL + posterPath} /> */}
    </div>
  );
}

export default MovieCard