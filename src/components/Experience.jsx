export function Experience({ theme }) {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Led the development of responsive web applications using React.js and TailwindCSS. Collaborated with UX designers to implement pixel-perfect interfaces and improved application performance by 40%.",
      achievements: [
        "Redesigned the company's main product interface, resulting in a 25% increase in user engagement",
        "Mentored junior developers and led weekly code review sessions",
        "Implemented CI/CD pipelines to streamline the development process",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Solutions LLC",
      period: "2020 - 2022",
      description:
        "Developed and maintained client websites using modern JavaScript frameworks. Worked closely with backend engineers to integrate REST APIs and optimize data flow.",
      achievements: [
        "Created reusable component libraries that reduced development time by 30%",
        "Implemented responsive designs across 15+ client websites",
        "Conducted usability testing and improved accessibility standards",
      ],
    },
    {
      id: 3,
      role: "Web Developer Intern",
      company: "StartupHub",
      period: "2019 - 2020",
      description:
        "Assisted in the development of web applications. Learned and implemented modern web technologies and best practices.",
      achievements: [
        "Developed landing pages for marketing campaigns",
        "Participated in daily stand-ups and sprint planning sessions",
        "Contributed to the company's design system documentation",
      ],
    },
  ];

  return (
    <section id='experience' className='py-20 px-4'>
      <div className='container mx-auto'>
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme.text}`}>Work Experience</h2>

        <div className='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-current before:to-transparent before:opacity-20'>
          {experiences.map((job, index) => (
            <div
              key={job.id}
              className={`relative flex items-start md:justify-between md:even:flex-row-reverse group ${
                index !== experiences.length - 1 ? "mb-12" : ""
              }`}>
              <div className='flex items-center justify-center w-10 h-10 rounded-full border-2 border-current z-10 bg-current bg-opacity-10 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2'>
                <span className={`w-3 h-3 rounded-full ${theme.accent}`}></span>
              </div>

              <div
                className={`min-w-0 md:w-5/12 p-6 rounded-lg shadow-md ${theme.bg} border border-opacity-10 border-current md:group-odd:text-right`}>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
                  <h3 className={`text-xl font-bold ${theme.text}`}>{job.role}</h3>
                  <span className={`${theme.accent} text-sm`}>{job.period}</span>
                </div>
                <h4 className={`${theme.accent} font-medium mb-3`}>{job.company}</h4>
                <p className={`${theme.text} mb-4`}>{job.description}</p>
                <ul className={`space-y-2 ${theme.text}`}>
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className='flex items-center md:group-odd:justify-end'>
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${theme.accent} md:group-odd:order-2 md:group-odd:ml-2 md:group-odd:mr-0`}></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
