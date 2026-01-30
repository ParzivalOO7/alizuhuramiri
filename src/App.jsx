import ParticlesBackground from "./components/particles-background";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Marquee from "./components/marquee";
import Projects from "./components/projects";
import About from "./components/about";
import Schools from "./components/study";
import Contact from "./components/contact";
import Experience from "./components/experience";

const App = () => {
  return (
    <main className="font-light text-black antialiased bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Schools />
      <Experience />
      <Contact />
      <ParticlesBackground />
    </main>
  );
};

export default App;
