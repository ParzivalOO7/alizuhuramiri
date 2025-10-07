import { EXPERIENCE } from "../constants";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">Werkervaring</h2>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-6xl">
          {EXPERIENCE.map((exp, id) => (
            <div key={id} className="mx-4 mb-20">
              {/* Company name styled like the school name */}
              <h2 className="font-medium lg:text-2xl bg-gradient-to-r from-lime-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {exp.company}
              </h2>

              {/* Dates styled like the year */}
              <div className="flex justify-between">
                <p className="py-4 lg:text-xl">
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>

              {/* Description styled the same way */}
              <p className="font-sans text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
