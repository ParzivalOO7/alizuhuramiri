import { EXPERIENCE } from "../constants";

const Experience = () => {
  return (
    <section className="bg-white" id="experience">
      <h1 className="my-10 text-center text-3xl lg:text-8xl text-black">Werkervaring</h1>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-6xl">
          {EXPERIENCE.map((exp, id) => (
            <div key={id} className="mx-4 mb-20">
              {/* Company name styled like the school name */}
              <h2 className="font-medium lg:text-2xl text-black">
                {exp.company}
              </h2>

              {/* Dates styled like the year */}
              <div className="flex justify-between">
                <p className="py-4 lg:text-xl text-black">
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>

              {/* Description styled the same way */}
              <p className="font-sans text-gray-500">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
