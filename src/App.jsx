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
    <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Schools />
      <Experience />
      <Contact />
    </main>
  );
};

export default App;
