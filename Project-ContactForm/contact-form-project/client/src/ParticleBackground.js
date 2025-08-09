import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: "#050515ff",
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: 3,
          },
        },

        // ✅ MOUSE INTERACTIVITY GOES HERE
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.5,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
