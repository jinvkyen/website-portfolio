import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
    image: "",
    technologies: ["", "", "", ""],
    githubUrl: "",
    liveUrl: "",
  },

];

export default function Projects({ theme }) {
  return (
    <section id='projects' className='py-20 px-4'>
      <div className='container mx-auto'>
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme.text}`}>My Projects</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${theme.bg} border border-opacity-10 border-current`}>
              <div className='relative overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110'
                />
                <div
                  className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className='flex space-x-4'>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300'>
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300'>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className='p-6'>
                <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>{project.title}</h3>
                <p className={`${theme.accent} mb-4`}>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full bg-opacity-10 bg-current ${theme.text}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
