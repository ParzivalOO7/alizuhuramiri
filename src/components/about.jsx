import { ABOUT } from "../constants/index";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {
  // init functie voor tsparticles
  const particlesInit = async (main) => {
    console.log("Particles init:", main);
    await loadFull(main);
  };

  // optional: callback wanneer geladen
  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  return (
    <section
      id="about"
      className="relative py-20 w-full flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Particles achtergrond */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 -z-10" //  achter alles
        options={{
          background: {
            color: "transparent", // geen zwart, gewoon doorzichtig
          },
          fpsLimit: 60,
          particles: {
            number: { value: 80 }, // iets minder, rustiger
            color: { value: "#ffffff" },
            size: { value: 2 },
            move: { enable: true, speed: 0.8 },
            links: { enable: true, color: "#ffffff", opacity: 0.4 },
          },
          detectRetina: true,
        }}
      />

      {/* Content boven particles */}
      <div className="relative z-10 text-center text-white">
        <h2 className="my-10 text-3xl lg:text-8xl">Over mij</h2>
        <p className="m-8 max-w-6xl mx-auto text-3xl lg:text-6xl">{ABOUT}</p>
      </div>
    </section>
  );
};

export default About;




// import { ABOUT } from "../constants/index";
// const About = () => {
//   return (
//     <section id="about">
//       <h2 className="my-10 text-center text-3xl lg:text-8xl">Over mij</h2>
//       <div className="flex items-center justify-center">
//         <p className="m-8 max-w-6xl text-3xl lg:text-6xl">{ABOUT}</p>
//       </div>
//     </section>
//   );
// };
// export default About;

// /////////////