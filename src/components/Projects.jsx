import { Github, ExternalLink } from "lucide-react";

// Change projects data here:
const projectsData = [
  {
    id: 1,
    title: "valentine's envelope animation",
    description: "This project is a Valentine's Day-themed envelope animation built using HTML, CSS, and JavaScript.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744367841/MacBook_Pro_14__-_2_zf96vb.png",
    technologies: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/jinvkyen/valentines-envelope-animation",
    liveUrl: "https://valentines-envelope-animatio.onrender.com/",
  },
  {
    id: 2,
    title: "toqui co.",
    description: "This a pet hub and website personal project dedicated to my beloved pet.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744372269/toquico_bzro6k.png",
    technologies: ["React.js", "TailwindCSS"],
    githubUrl: "https://github.com/jinvkyen/toquico-website-react",
    liveUrl: "https://toquico.vercel.app/",
  },
  {
    id: 3,
    title: "researchAIde",
    description:
      "This is an AI Research Assistant module developed as an internal project.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744372752/researchaide_itly9z.png",
    technologies: ["HTML", "TailwindCSS", "JS"],
    githubUrl: "https://github.com/jinvkyen/research-8d",
    liveUrl: "https://confused-alloy.onrender.com/index.html",
  },
];

export default function Projects({ theme }) {
  return (
    <section id='projects' className='py-20 px-8 sm:px-16 xl:px-28'>
      <div className='flex flex-col container mx-auto'>
        <h2 className={`text-3xl md:text-4xl overflow-hidden font-bold mb-12 text-center ${theme.text}`}>projects</h2>

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
                <h4 className={`text-lg font-bold mb-2 ${theme.text}`}>{project.title}</h4>
                <p className={`text-base ${theme.accent} mb-4`}>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme.bg === "bg-white" || theme.bg === "bg-amber-50" || theme.bg === "bg-amber-100"
                          ? "bg-gray-200 ${theme.text}"
                          : "${theme.bg} ${theme.text}"
                      }`}>
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
