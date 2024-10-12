import React from "react";
import { IoPlay } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black font-semibold p-4 px-12 text-xl rounded-lg flex gap-1 ">
          <IoPlay className="h-6" />
          Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white font-semibold p-4 px-12 text-xl bg-opacity-50 rounded-lg flex gap-1">
          <IoInformationCircleOutline className="h-7" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
