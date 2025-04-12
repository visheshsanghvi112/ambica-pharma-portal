
import React from "react";

const BackgroundBlobs = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full opacity-10 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 blur-3xl animate-blob" style={{ animationDelay: "4s" }}></div>
    </div>
  );
};

export default BackgroundBlobs;
