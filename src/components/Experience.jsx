export function Experience({ theme }) {
  // Change experiences data here:
  const experiences = [
    {
      id: 1,
      role: "Capstone",
      company: "Adamson University",
      period: "2024 - 2025",
      description:
        "Contributed the development of responsive website using React.js and TailwindCSS. Collaborated with UX designers.",
      achievements: ["Nominated for Best Capstone Award."],
    },
    {
      id: 2,
      role: "R&D Intern",
      company: "Rakso CT.",
      period: "2025 - Present",
      description: "Took the lead on developing the proposed module, driving both vision and execution.",
      achievements: ["Guided the team in assessing and shaping the module’s feasibility and direction."],
    },
  ];

  return (
    <section id='experience' className='py-20 px-8 md:px-28'>
      <div className='flex flex-col container mx-auto'>
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme.text} overflow-hidden`}>
          Work Experience
        </h2>

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
                <p className={`text-sm ${theme.text} mb-4`}>{job.description}</p>
                <ul className={`space-y-2 ${theme.text}`}>
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className='flex items-center md:group-odd:justify-end'>
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${theme.accent} md:group-odd:order-2 md:group-odd:ml-2 md:group-odd:mr-0`}></span>
                      <span className='text-xs'>{achievement}</span>
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
