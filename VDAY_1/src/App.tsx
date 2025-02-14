import React, { useState } from "react";
import { motion } from "framer-motion";

const ValentinesPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNo, setShowNo] = useState(true);
  const [showHearts, setShowHearts] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      {/* Click to Begin Button */}
      {!showPopup && (
        <motion.button 
          onClick={() => setShowPopup(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg"
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
          <div className="mt-4 flex gap-4 justify-center">
            {showNo && (
              <motion.button 
                onClick={() => setShowNo(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-2 bg-gray-400 text-white rounded-lg"
              >
                No 😢
              </motion.button>
            )}
            <motion.button 
              onClick={() => setShowHearts(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              Yes! ❤️
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Floating Hearts Animation */}
      {showHearts && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute top-20 text-5xl"
        >
          ❤️💖💕💘
        </motion.div>
      )}
    </div>
  );
};

export default ValentinesPopup;
