import React from "react";
import styles from "@/styles/Cube.module.css"; // Importing custom CSS for keyframes

const Cube = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className={`relative w-64 h-64 transform-style-3d ${styles.cube}`}>
        {/* Front Side */}
        <div
          className={`absolute w-full h-full bg-blue-500 ${styles.side} transform rotateY-0 translateZ-32`}
        >
          <img
            src="/images/front.jpg"
            alt="Front"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full bg-red-500 ${styles.side} transform rotateY-180 translateZ-32`}
        >
          <img
            src="/images/back.jpg"
            alt="Back"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left Side */}
        <div
          className={`absolute w-full h-full bg-yellow-500 ${styles.side} transform rotateY-90 translateZ-32`}
        >
          <img
            src="/images/left.jpg"
            alt="Left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div
          className={`absolute w-full h-full bg-green-500 ${styles.side} transform -rotateY-90 translateZ-32`}
        >
          <img
            src="/images/right.jpg"
            alt="Right"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Side */}
        <div
          className={`absolute w-full h-full bg-purple-500 ${styles.side} transform rotateX-90 translateZ-32`}
        >
          <img
            src="/images/top.jpg"
            alt="Top"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Side */}
        <div
          className={`absolute w-full h-full bg-pink-500 ${styles.side} transform -rotateX-90 translateZ-32`}
        >
          <img
            src="/images/bottom.jpg"
            alt="Bottom"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Cube;
