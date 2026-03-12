import { useLanguage } from "../context/LanguageContext";

const SKILLS = ["HTML", "CSS", "JavaScript", "WordPress (Elementor)", "Git"];

const Skills = () => {
  const { language } = useLanguage();
  const heading = language === "nl" ? "Vaardigheden" : "Skills";

  return (
    <section className="relative z-10 bg-white" id="skills">
      <h2 className="my-10 text-xl lg:text-2xl font-semibold text-black px-4 uppercase tracking-widest">{heading}</h2>
      <div className="max-w-6xl px-4 mb-20">
        <div className="flex flex-wrap gap-4">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="border border-black rounded-full px-6 py-2 text-black text-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
