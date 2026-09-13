import { LuImport } from "react-icons/lu";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const cvButtonVariants = {
  rest: { y: 0, scale: 1, boxShadow: "0 4px 20px rgba(255,104,72,0.28)" },
  hover: { y: -3, scale: 1.03, boxShadow: "0 8px 32px rgba(255,104,72,0.48)" },
  tap: { scale: 0.97, y: 1, boxShadow: "0 2px 10px rgba(255,104,72,0.2)" },
};

const iconVariants = {
  rest: { rotate: 0, x: 0, y: 0, scale: 1 },
  hover: { rotate: 15, x: 1, y: -1, scale: 1.15 },
};

const Hero = () => {
  const { language } = useLanguage();
  const cvFile = language === "nl" ? "/alizuhuramiri/CV-NL.pdf" : "/alizuhuramiri/CV-EN.pdf";

  return (
    <section className="relative z-10 h-[78vh] min-h-[560px] overflow-hidden">
      <div className="mx-auto flex h-full w-full items-center justify-center px-4 py-4">
        <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
          <motion.h1
            className="text-[clamp(3.5rem,10vw,8rem)] font-semibold uppercase leading-none tracking-[-0.06em] text-ink"
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
            <p className="font-mono text-sm text-muted">MBO-4 Software Developer</p>

            <motion.a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 rounded-[9px] bg-accent px-5 py-2.5 text-sm font-medium text-paper"
              variants={cvButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <span>CV</span>
              <motion.span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/10"
                variants={iconVariants}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <LuImport className="h-3 w-3" />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
