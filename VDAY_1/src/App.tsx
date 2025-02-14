import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import "./index.css";

const ValentinesPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNo, setShowNo] = useState(true);
  const [showHearts, setShowHearts] = useState(false);
  const [showText, setShowText] = useState(false); // State for "Better"
  const [showImage, setShowImage] = useState(false); // State for showing the image

  // Delay showing "Better" text until 3.4 seconds after hearts appear
  useEffect(() => {
    if (showHearts) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 3400);
      return () => clearTimeout(timer);
    }
  }, [showHearts]);

  return (
    <div className="center-screen">

      {/* Click to Begin Button */}
      {!showPopup && (
        <motion.button 
          onClick={() => setShowPopup(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-2 bg-rose-500 text-white rounded-lg shadow-lg button"
        
        >
          Click to Begin ❤️
        </motion.button>
      )}

      {/* Valentine's Popup */}
      {showPopup && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.75 }}
          className="bg-white p-6 rounded-xl shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-pink-600">
            Will you be my Valentine? 💖
          </h2>

          {/* Buttons */}
          <div className="mx-40 justify-center flex space-x-4">
            {showNo && (
              <motion.button 
                onClick={() => setShowNo(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-2 text-white rounded-lg"
              >
                No 😢
              </motion.button>
            )}
            
            <motion.button 
              onClick={() => {
                setShowHearts(true); // Show hearts animation
                setShowImage(true);  // Show image after clicking "Yes"
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              YES! ❤️
            </motion.button>
          </div>
        </motion.div>
      )}
      
      {/* Floating Hearts Animation */}
      {showHearts && (
        <div className="absolute top-10 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -20, 0] }}
            transition={{ duration: 3.0 }}
            className="text-5xl"
          >
            ❤️💖💕💘
          </motion.div>

          {/* "Better" appears after the hearts animation ends */}
          {showText && (
            <motion.div className="mt-4 text-xl font-bold">
              (You Better 😉)
            </motion.div>
          )}
        </div>
      )}

      {/* 🎨 Image Appears After Clicking "YES!" */}
      {showImage && (
        <motion.img 
          src="src/assets/pic1.jpg" // Replace with your actual image path
          initial={{ opacity: 1, y:[0,-80,0], scale: 0.1 }}  // Start small
          animate={{ scale: 1.3 }}  // Scale up
          transition={{ duration: 20.0 }}  // Smooth animation
          className="w-auto h-auto"
        />
      )}
    </div>
  );
};

export default ValentinesPopup;
