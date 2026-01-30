import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="p-8 bg-white" id="projects">
      <h1 className="my-10 text-center text-3xl lg:text-8xl">Mijn Projecten</h1>

      {/* Responsive grid for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full transform transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* Card container */}
            <div className="flex flex-col h-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text section */}
              <div className="flex flex-col justify-between flex-1 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <span className="mt-auto text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity text-white">
                  Bekijk project →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
