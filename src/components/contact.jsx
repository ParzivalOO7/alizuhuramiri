import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className="relative z-10 bg-white" id="contact">
      <div className="max-w-6xl">
        <h2 className="my-10 text-xl lg:text-2xl font-semibold text-black px-4 uppercase tracking-widest">{t.heading}</h2>
        <p className="p-4 text-xl text-black">{t.text}</p>
        <p className="my-4 text-2xl text-black px-4 lg:pt-6 lg:text-5xl">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <p className="my-4 text-2xl text-black px-4 lg:pt-6 lg:text-5xl">
          <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
        </p>
      </div>
      <div className="lg:hidden mt-20 flex items-center justify-start px-4 gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="my-8 px-4 text-gray-400 text-center">
        &copy; 2026 Ali Zuhur Amiri
      </p>
    </section>
  );
};

export default Contact;
