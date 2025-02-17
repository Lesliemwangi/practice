import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Gif () {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: "#00ff99" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          links: { enable: true, distance: 150, color: "#00ff99", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 1.5, direction: "none", random: false },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 200, duration: 0.4 } },
        },
      }}
    />
  );
}

export default Gif;
