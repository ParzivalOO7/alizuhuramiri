import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import Skills from "./components/skills";
import Schools from "./components/study";
import Contact from "./components/contact";
import Experience from "./components/experience";
import { LanguageProvider } from "./context/LanguageContext";
import BackgroundPaths from "./components/background-paths";

const App = () => {
  return (
    <LanguageProvider>
      <main className="relative z-10 min-h-screen font-light text-black antialiased">
        <BackgroundPaths />
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
