import { ABOUT } from "../constants/index";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 w-full flex items-center justify-center"
    >
      <div className="relative z-10 text-center text-black">
        <h1 className="font-medium my-10 text-3xl lg:text-8xl">Over mij</h1>
        <p className="font-light m-8 max-w-6xl mx-auto text-3xl lg:text-4xl">{ABOUT}</p>
      </div>
    </section>
  );
};

export default About;
