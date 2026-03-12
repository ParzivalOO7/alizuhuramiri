import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section
      id="about"
      className="relative z-10 py-20 w-full bg-white"
    >
      <div className="relative z-10 max-w-6xl px-4 text-black">
        <h2 className="my-10 text-xl lg:text-2xl font-semibold uppercase tracking-widest">{t.heading}</h2>
        <p className="font-light mb-8 text-3xl lg:text-4xl">{t.text}</p>
      </div>
    </section>
  );
};

export default About;
