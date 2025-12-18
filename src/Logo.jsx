import React from 'react';
import './Logo.css'; // We will create this file for the animation

const Logo = () => {
  return (
    <svg
      className="logo-svg"
      width="40"
      height="40"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00c6ff' }} />
          <stop offset="100%" style={{ stopColor: '#0072ff' }} />
        </linearGradient>
      </defs>
      <path
        className="logo-shield"
        fill="url(#logo-gradient)"
        d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z"
      />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fill="white"
        fontSize="30"
        fontWeight="bold"
        className="logo-text"
      >
        SDA
      </text>
    </svg>
  );
};

export default Logo;
