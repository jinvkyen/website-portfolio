import { Github, ExternalLink, ArrowRight, Code } from "lucide-react";

// Change projects data here:
const projectsData = [
  {
    id: 1,
    title: "valentine's envelope animation",
    description: "This project is a Valentine's Day-themed envelope animation built using HTML, CSS, and JavaScript.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744367841/MacBook_Pro_14__-_2_zf96vb.png",
    technologies: ["html5", "css3", "javascript"],
    githubUrl: "https://github.com/jinvkyen/valentines-envelope-animation",
    liveUrl: "https://valentines-envelope-animatio.onrender.com/",
    tags: ["CSS Animations"],
  },
  {
    id: 2,
    title: "toqui co.",
    description: "This a pet hub and website personal project dedicated to my beloved pet.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744372269/toquico_bzro6k.png",
    technologies: ["react", "tailwindcss"],
    githubUrl: "https://github.com/jinvkyen/toquico-website-react",
    liveUrl: "https://toquico.vercel.app/",
    tags: ["Web Design", "Blog"],
  },
  {
    id: 3,
    title: "researchAIde",
    description: "This is an AI Research Assistant module developed as an internal project.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744372752/researchaide_itly9z.png",
    technologies: ["html5", "javascript", "tailwindcss"],
    githubUrl: "https://github.com/jinvkyen/research-8d",
    liveUrl: "https://confused-alloy.onrender.com/index.html",
    tags: ["API", "Hugging Face", "Web Design"],
  },
];

export default function Projects({ theme }) {
  // Featured project is the first project
  const featuredProject = projectsData[0];
  const otherProjects = projectsData.slice(1);

  // GitHub profile URL
  const githubProfileUrl = "https://github.com/jinvkyen";

  return (
    <section id='projects' className='py-20 px-4 md:px-28 md:py-30 bg-current'>
      <div className='pb-16 flex flex-col md:flex-row md:justify-between items-center'>
        <h2 className={`mb-6 md:mb-0 text-3xl md:text-4xl overflow-hidden font-bold text-center ${theme.texts}`}>
          projects
        </h2>
        <a
          href={githubProfileUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={`inline-flex text-xl items-center gap-3 ${theme.texts} transition-colors hover:${theme.accent} hover:opacity-90`}>
          <Code size={20} />
          view all my projects
          <ArrowRight size={20} />
        </a>
      </div>{" "}
      <div className='max-w-7xl mx-auto'>
        {/* Featured Project */}
        <div
          className={`rounded-xl overflow-hidden shadow-xl mb-16 p-8 md:p-12 flex flex-col lg:flex-row gap-8 ${theme.bg}`}>
          <div className='lg:w-1/2 flex flex-col justify-center'>
            <div className='flex flex-wrap gap-2 mb-6'>
              {featuredProject.tags.map((tag, index) => (
                <span key={index} className={`px-4 py-2 text-sm rounded-sm ${theme.texts} ${theme.bgs} font-medium`}>
                  {tag}
                </span>
              ))}
            </div>

            <h2 className={`text-3xl md:text-4xl ${theme.text} font-bold mb-4 overflow-hidden`}>
              {featuredProject.title}
            </h2>

            <p className={`${theme.accent} mb-8 text-lg`}>{featuredProject.description}</p>

            <div className='flex gap-4'>
              <a
                href={featuredProject.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className={`rounded-lg inline-flex items-center gap-2 ${theme.bgls} ${theme.texts} px-6 py-3 rounded-full font-medium transition-colors hover:${theme.accent} hover:opacity-90`}>
                View Live <ArrowRight size={18} />
              </a>
              <a
                href={featuredProject.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${theme.bgls} ${theme.texts}`}>
                <Github size={20} />
              </a>

            </div>
          </div>

          <div className='lg:w-1/2'>
            <div className='relative overflow-hidden rounded-xl shadow-lg h-80 md:h-96'>
              <img src={featuredProject.image} alt={featuredProject.title} className='w-full h-full object-cover' />
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {otherProjects.map((project) => (
            <div key={project.id} className={`${theme.bg} rounded-xl overflow-hidden shadow-lg flex flex-col`}>
              <div className='relative h-64 overflow-hidden'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
              </div>

              <div className='p-6 flex-grow'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-sm ${theme.texts} ${theme.bgs} font-medium`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={`text-2xl font-bold ${theme.text} mb-3`}>{project.title}</h3>
                <p className={`${theme.accent} mb-6`}>{project.description}</p>

                <div className='flex justify-between items-center'>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, index) => (
                      <img
                        key={index}
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                        alt={tech}
                        className={`w-8 h-8 object-contain ${theme.texts}`}
                      />
                    ))}
                  </div>

                  <div className='flex gap-3'>
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`p-2 rounded-full ${theme.bgls} ${theme.texts} hover:${theme.accent} hover:opacity-90 transition-colors`}>
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`p-2 rounded-full ${theme.bgls} ${theme.texts} hover:${theme.accent} hover:opacity-90 transition-colors`}>
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

