import React from 'react'
import GptSearchBar from './GptSearchBar'
import {Bg_Image} from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
       <div className="absolute -z-10">
        <img
          src={Bg_Image}
          alt="bg-image"
        />
      </div>
      <GptSearchBar/>
    </div>
  )
}

export default GptSearch