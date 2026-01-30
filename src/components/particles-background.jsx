import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0, // particles layer
        },
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        particles: {
          number: { value: 60 },
          color: { value: "#000000" }, // black
          size: { value: 2 },
          move: { enable: true, speed: 0.8 },
          links: {
            enable: true,
            color: "#000000",
            opacity: 0.3,
            distance: 150,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
