import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Schools = () => {
  const { language } = useLanguage();
  const t = translations[language].study;

  return (
    <section className="relative z-10 bg-white" id="study">
      <h2 className="my-10 text-xl lg:text-2xl font-semibold text-black px-4 uppercase tracking-widest">{t.heading}</h2>
      <div className="max-w-6xl">
        <div className="max-w-6xl">
          {t.schools.map((school, id) => (
            <div key={id} className="mx-4 mb-20">
              <h2 className="font-medium lg:text-2xl text-black">
                {school.school}
              </h2>
              <div className="flex justify-between">
                <p className="py-4 lg:text-xl text-black">{school.year}</p>
              </div>
              <p className="text-black">
                {school.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;
