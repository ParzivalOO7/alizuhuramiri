import { LuImport } from "react-icons/lu";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();
  const cvFile = language === "nl" ? "/alizuhuramiri/CV-NL.pdf" : "/alizuhuramiri/CV-EN.pdf";

  return (
    <section className="relative z-10 h-[78vh] min-h-[560px] overflow-hidden bg-white">
      <div className="mx-auto flex h-full w-full items-center justify-center px-4 py-4">
        <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
          <motion.h1
            className="text-[clamp(3.5rem,10vw,8rem)] font-semibold uppercase leading-none tracking-[-0.06em] text-black"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            Ali<br />Zuhur<br />Amiri
          </motion.h1>

          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base text-black opacity-60">MBO-4 Software Developer</p>

            <motion.a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <span>CV</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:bg-black/20">
                <LuImport className="h-3 w-3" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
