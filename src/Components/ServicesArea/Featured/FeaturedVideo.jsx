import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { motion } from "framer-motion";
import Gift from "../../../assets/First.mp4";

// Import motion configs
import { buttonHoverAnim, underlineAnim } from "./featuredVideoAnimations";

const FeaturedVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-10 px-4 md:px-10 items-center">
      {/* Video Section */}
      <div className="relative w-full md:w-1/2 h-60 md:h-140">
        <video
          ref={videoRef}
          src={Gift}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover shadow-2xl rounded-lg"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={togglePlay}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-gray-300"
          >
            {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
          </button>
          <button
            onClick={toggleMute}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-gray-300"
          >
            {isMuted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
          </button>
        </div>
      </div>

      {/* Notes Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-black">Doozie</h2>
        <p className="text-black text-base md:text-lg mb-6">
          Doozie is our special curated collection for online gift shoppers. We
          provide a wide variety of unique and fun gifts for every occasion,
          ensuring that your loved ones get something memorable and meaningful.
          Perfect for birthdays, anniversaries, and celebrations, Doozie brings
          joy in every package!
        </p>

        <motion.button
          className="py-3 px-6 border-b-2 border-black rounded-t-md font-medium text-black relative overflow-hidden mx-auto"
          {...buttonHoverAnim}
        >
          Keep Discovering
          <motion.span
            className="absolute left-0 bottom-0 h-[2px] bg-black"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            variants={underlineAnim}
          ></motion.span>
        </motion.button>
      </div>
    </div>
  );
};

export default FeaturedVideo;
