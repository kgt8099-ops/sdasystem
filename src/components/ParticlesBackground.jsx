import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's aiven the particles behavior and interaction
      // a few bundles are available, check the documentation for more info
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };
    
  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: '#0d1117', // A dark, deep blue background color
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab', // Grab effect on hover
        },
        onClick: {
          enable: true,
          mode: 'push', // Push particles on click
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: '#00c6ff', // Bright cyan for particles
      },
      links: {
        color: '#00c6ff', // Bright cyan for links
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'out',
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80, // Number of particles
      },
      opacity: {
        value: 0.5, // Particle opacity
      },
      shape: {
        type: 'circle', // Particle shape
      },
      size: {
        value: { min: 1, max: 3 }, // Particle size
      },
    },
    detectRetina: true,
  }), []);


  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: -10, // Ensure it's in the background
        }}
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
