import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className="relative z-10 bg-white pt-24 pb-12" id="contact">
      <div className="mx-auto max-w-4xl px-4">
        <motion.p
          className="mb-5 text-xs font-medium uppercase tracking-widest text-black opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t.heading}
        </motion.p>

        <motion.p
          className="mb-12 max-w-[45ch] text-lg text-black opacity-60"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        >
          {t.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="block text-2xl lg:text-4xl font-semibold text-black leading-none hover:opacity-60 transition-opacity duration-300 mb-4 break-all"
          >
            {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="block text-lg text-black opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            {CONTACT.phone}
          </a>
        </motion.div>
      </div>

      <div className="lg:hidden mt-16 flex items-center justify-start px-4 gap-6">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            whileHover={{ y: -2 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <p className="mt-16 px-4 text-xs text-black opacity-30 text-center">
        &copy; 2026 Ali Zuhur Amiri
      </p>
    </section>
  );
};

export default Contact;
