import { SCHOOLS } from "../constants";

const Schools = () => {
  return (
    <section className="bg-white" id="study">
      <h1 className="my-10 text-center text-3xl lg:text-8xl">Opleidingen</h1>
      <div className="mx-auto max-w-6xl">
        <h2 className="my-10 text-center text-3xl lg:text-8xl"></h2>
        <div className="mx-auto nax-w-6xl">
          {SCHOOLS.map((experience, id) => (
            <div key={id} className="mx-4 mb-20">
              <h2 className="font-medium lg:text-2xl text-black">
                {experience.school}
              </h2>
              <div className="flex justify-between">
                <p className="py-4 lg:text-xl text-black">{experience.year}</p>
              </div>
              <p className="font-sans text-black">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;
