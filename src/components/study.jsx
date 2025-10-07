import { SCHOOLS } from "../constants";

const Schools = () => {
  return (
    <section id="study">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">Opleidingen</h2>
      <div className="mx-auto max-w-6xl">
        <h2 className="my-10 text-center text-3xl lg:text-8xl"></h2>
        <div className="mx-auto nax-w-6xl">
          {SCHOOLS.map((experience, id) => (
            <div key={id} className="mx-4 mb-20">
              <h2 className="font-medium lg:text-2xl bg-gradient-to-r from-lime-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {experience.school}
              </h2>
              <div className="flex justify-between">
                <p className="py-4 lg:text-xl">{experience.year}</p>
              </div>
              <p className="font-sans text-gray-400">
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
