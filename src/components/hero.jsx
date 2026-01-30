import { LuImport } from "react-icons/lu";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center bg-white">
        <h1 className="mt-16 overflow-hidden text-[10vw] font-semibold uppercase leading-none text-black">
          Ali <br /> Zuhur <br /> Amiri
        </h1>
        <div className="mt-8">
          <a
            href="/alizuhuramiri/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center rounded-xl bg-black p-2 px-3 font-sans font-medium text-white hover:bg-black"
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
