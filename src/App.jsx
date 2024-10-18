import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Marquee from "./components/marquee";
import Projects from "./components/projects";

const App = () => {
  return (
    <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
    </main>
  );
};

export default App;
