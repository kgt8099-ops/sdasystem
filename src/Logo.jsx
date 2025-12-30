import React from 'react';
import './Logo.css'; // Import the CSS for styling

const Logo = () => {
  return (
    <svg className="logo-svg" viewBox="0 0 200 30" width="160" height="24">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#00bfff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00ffc3', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text className="logo-text-sda" x="0" y="22" fill="url(#grad1)">SDA</text>
      <text className="logo-text-system" x="65" y="22" fill="#ffffff">SYSTEM</text>
    </svg>
  );
};

export default Logo;
