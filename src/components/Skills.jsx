export default function Skills({ theme }) {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TailwindCSS", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Firebase", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "REST APIs", level: 85 },
        { name: "Testing (Jest)", level: 70 },
      ],
    },
  ];

  return (
    <section id='skills' className='py-20 px-4'>
      <div className='container mx-auto'>
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme.text}`}>Skills & Technologies</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md ${theme.bg} border border-opacity-10 border-current`}>
              <h3 className={`text-xl font-bold mb-6 ${theme.text}`}>{category.title}</h3>

              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className='flex justify-between mb-1'>
                      <span className={theme.text}>{skill.name}</span>
                      <span className={theme.accent}>{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full bg-gray-200 bg-opacity-20`}>
                      <div className={`h-2 rounded-full ${theme.accent}`} style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
