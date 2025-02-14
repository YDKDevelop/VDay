import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

const ValentinesPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNo, setShowNo] = useState(true);
  const [showHearts, setShowHearts] = useState(false);
  const [showText, setShowText] = useState(false); // State for "Better"

  // Delay showing "Better" until 3 seconds after hearts appear
  useEffect(() => {
    if (showHearts) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 3400); // Delay matches the hearts animation duration
      return () => clearTimeout(timer); // Cleanup timer
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
        >
          Click to Begin ❤️
        </motion.button>
      )}

      {/* Valentine's Popup */}
      {showPopup && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
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
                // className="px-6 py-2 bg-gray-400 text-white rounded-lg"
              >
                no 😢
              </motion.button>
            )}
            
            <motion.button 
              onClick={() => setShowHearts(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            //   className="px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              YES! ❤️
            </motion.button>
          </div>
        </motion.div>
      )}
      
      <br></br>
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
            <motion.div>
              (Better)
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default ValentinesPopup;
