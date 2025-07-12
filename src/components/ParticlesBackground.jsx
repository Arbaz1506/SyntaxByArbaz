import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    background: {
      color: { value: "#0b0c10" }  // Dark theme
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    particles: {
      number: {
        value: 200,   // Increased density
        density: {
          enable: true,
          area: 700,
        },
      },
      color: {
        value: ["#00bfff", "#00e5ff", "#ffffff"],  // Soft glowing colors
      },
      links: {
        enable: true,
        distance: 130,
        color: "#00bfff",
        opacity: 0.3,
        width: 1.2,
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.6,
        random: true,
      },
      size: {
        value: { min: 1.5, max: 3.5 },
        random: true,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: {
          default: "out",
        },
      },
    },
    detectRetina: true,
  }), []);

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
