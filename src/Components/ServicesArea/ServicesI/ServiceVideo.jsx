import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Gift from '../../../assets/Gifts.mp4';
import GoodProduct from '../../../assets/ServiceOne.mp4';
import LookingCool from '../../../assets/ServiceTwo.mp4';

const ServiceList = [
  {
    id: 1,
    videoSrc: Gift,
    name: "Doozie",
    description: "Online seller of gifts and more",
    link: "/doozie"
  },
  {
    id: 2,
    videoSrc: GoodProduct,
    name: "Good Product",
    description: "High quality items for your loved ones",
    link: "/goodproduct"
  },
  {
    id: 3,
    videoSrc: LookingCool,
    name: "Looking Cool",
    description: "Stylish fashion and accessories",
    link: "/lookingcool"
  },
];

const ServiceVideo = () => {
  return (
    <div className="bg-amber-50 py-20">
      {/* Section Heading */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-medium mb-4 text-black text-center">
          DOOZIE SERVICES
        </h1>
      </motion.div>

      {/* Video Grid */}
      <div className="px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {ServiceList.map((item) => {
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
            <motion.div
              key={item.id}
              className="flex flex-col items-center overflow-hidden bg-amber-50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-64 md:h-80 lg:h-96 bg-amber-50">
                <video
                  ref={videoRef}
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#fef3c7" }} // amber-50 fallback behind video
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

              <Link
                to={item.link}
                className="mt-5 text-2xl text-black font-mono hover:underline transition duration-300"
              >
                {item.name}
              </Link>
              <p className="text-black mt-2 text-sm font-medium text-center px-2">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceVideo;
