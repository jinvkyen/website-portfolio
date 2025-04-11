import { BriefcaseIcon, Calendar, MapPin } from "lucide-react";

export function Experience({ theme }) {
  // Change experiences data here:
  const experiences = [
    {
      id: 1,
      role: "Front End Developer",
      company: "Adamson University",
      period: "2024 - 2025",
      location: "Manila, Philippines",
    },
    {
      id: 2,
      role: "R & D Intern",
      company: "Rakso CT.",
      period: "2025 - Present",
      location: "Makati, Philippines",
    },
  ];

  return (
    <section id='experience' className={`py-20 px-8 md:px-28 ${theme.accent}`}>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div className='col-span-1'>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme.text} overflow-hidden md:absolute md:left-28`}>
            Work Experience
          </h2>
        </div>
        <div className='col-span-1'>
          <div className='container mx-auto'>
            <div className='space-y-8'>
              {experiences.map((job) => (
                <div key={job.id} className='mb-8'>
                  <h3 className='text-xl font-bold'>{job.role}</h3>

                  <div className='flex items-center mt-2 mb-1'>
                    <BriefcaseIcon size={18} className='mr-2' />
                    <span>{job.company}</span>
                  </div>

                  <div className='flex items-center mb-1'>
                    <Calendar size={18} className='mr-2' />
                    <span>{job.period}</span>
                  </div>

                  <div className='flex items-center mb-2'>
                    <MapPin size={18} className='mr-2' />
                    <span>{job.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
