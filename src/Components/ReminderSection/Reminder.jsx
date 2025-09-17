import React, { useState } from 'react';
import ReminderImg from '../../assets/Reminder.png';
import { motion } from 'framer-motion';
import { containerVariants, titleVariants, buttonVariants } from '../ReminderSection/reminderAnimations';

function Reminder() {
  const [formData, setFormData] = useState({
    day: '',
    month: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reminder Data:", formData);
  };

  return (
    <div className="flex justify-center mt-20 px-4">
      <motion.div
        className="relative w-full sm:max-w-md md:max-w-3xl lg:max-w-5xl h-auto py-10 rounded-md overflow-hidden shadow-2xl hover:scale-105 transition duration-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${ReminderImg})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 "></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center px-6">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white drop-shadow-lg"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Reminder for Your Loved One ❤️
          </motion.h1>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white/10 hover:bg-white/20 p-4 sm:p-6 rounded-2xl w-full sm:w-120 border border-white/20 shadow-lg transition-all duration-300 hover:backdrop-blur-md hover:border-white/40 hover:shadow-xl"
          >
            {/* Day + Month same row */}
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                placeholder="Day"
                value={formData.day}
                onChange={(e) =>
                  setFormData({ ...formData, day: e.target.value })
                }
                className="flex-1 p-2 sm:p-3 rounded-md bg-transparent border border-white/40 text-white placeholder-white/80 outline-none focus:border-white focus:ring-1 focus:ring-white transition text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Month"
                value={formData.month}
                onChange={(e) =>
                  setFormData({ ...formData, month: e.target.value })
                }
                className="flex-1 p-2 sm:p-3 rounded-md bg-transparent border border-white/40 text-white placeholder-white/80 outline-none focus:border-white focus:ring-1 focus:ring-white transition text-sm sm:text-base"
              />
            </div>

            {/* Description below */}
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="p-2 sm:p-3 rounded-md bg-transparent border border-white/40 text-white placeholder-white/80 outline-none resize-none h-16 sm:h-20 text-sm sm:text-base focus:border-white focus:ring-1 focus:ring-white transition"
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="py-2 px-6 bg-white text-black border border-white/40 rounded-md font-medium transition duration-300 hover:bg-black hover:text-white hover:shadow-lg"
              whileHover={{ scale: 1 }}   // ✅ reduced hover effect
              whileTap={{ scale: 0.95 }}
            >
              Set Reminder
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Reminder;
