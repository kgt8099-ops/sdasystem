import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import TRUNK from 'vanta/dist/vanta.trunk.min';

const BackgroundSample = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TRUNK({
        el: vantaRef.current,
        THREE: THREE, // Pass the THREE.js library
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2575fc, // A modern blue color
        backgroundColor: 0x0a0a1a, // A very dark blue, almost black
        spacing: 5.0,
        chaos: 5.0
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: '100vw', height: '100vh' }}>
      <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '2rem',
          borderRadius: '10px'
      }}>
        <h1>Animated Background Sample</h1>
        <p>This is a sample of a cybersecurity-themed animated background.</p>
        <p>It is running on a separate, isolated page.</p>
      </div>
    </div>
  );
};

export default BackgroundSample;
