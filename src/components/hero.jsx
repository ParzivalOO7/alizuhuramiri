import { LuImport } from "react-icons/lu";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();
  const cvFile = language === "nl" ? "/alizuhuramiri/CV-NL.pdf" : "/alizuhuramiri/CV-EN.pdf";

  return (
    <section className="relative z-10 bg-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[6vw] font-semibold uppercase leading-none text-black">
          Ali <br /> Zuhur <br /> Amiri
        </h1>
        <p className="mt-4 text-lg text-black">MBO-4 Software Developer</p>
        <div className="mt-8">
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center rounded-xl bg-black p-2 px-3 font-medium text-white hover:bg-black"
          >
            <span>CV</span>
            <LuImport className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
