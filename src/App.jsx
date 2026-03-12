import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import Skills from "./components/skills";
import Schools from "./components/study";
import Contact from "./components/contact";
import Experience from "./components/experience";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <main className="font-light text-black antialiased bg-white lg:pr-48">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Schools />
        <Experience />
        <Contact />
      </main>
    </LanguageProvider>
  );
};

export default App;
