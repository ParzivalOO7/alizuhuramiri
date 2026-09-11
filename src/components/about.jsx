import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="relative z-10 py-32 w-full bg-white">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-black">
        <motion.p
          className="mb-5 text-xs font-medium uppercase tracking-widest opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t.heading}
        </motion.p>
        <motion.p
          className="font-light text-3xl lg:text-[2.5rem] leading-[1.35] max-w-[42rem]"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.text}
        </motion.p>
      </div>
    </section>
  );
};

export default About;
