import { Building, CalendarCheckIcon, MapPinCheckInside, Dot } from "lucide-react";

export function Experience({ theme }) {
  // Change experiences data here:
  const experiences = [
    {
      id: 1,
      role: "R & D Intern",
      company: "Rakso CT.",
      period: "Jan - Apr 2025",
      location: "Makati, Philippines",
    },
    {
      id: 2,
      role: "Front End Developer",
      company: "Adamson University",
      period: "2024 - 2025",
      location: "Manila, Philippines",
    },
  ];

  return (
    <section id='experience' className={`py-20 px-8 sm:px-16 xl:px-28 ${theme.accent}`}>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div className='col-span-1 order-2 md:order-1'>
          <div className='container mx-auto'>
            <div className='space-y-8'>
              {experiences.map((job, index) => (
                <div key={job.id}>
                  <h3 className='text-xl font-bold'>{job.role}</h3>

                  <div className='flex items-center mt-2 mb-1'>
                    <Building size={18} className='mr-2' />
                    <span>{job.company}</span>
                  </div>

                  <div className='flex items-center mb-1'>
                    <CalendarCheckIcon size={18} className='mr-2' />
                    <span>{job.period}</span>
                  </div>

                  <div className='flex items-center mb-4'>
                    <MapPinCheckInside size={18} className='mr-2' />
                    <span>{job.location}</span>
                  </div>

                  {index === 0 && (
                    <div className='flex items-center'>
                      <div className="block items-center space-x-1 mt-2 ">
                        <Dot size={18} className='mr-1' />
                        <Dot size={18} className='mr-1' />
                        <Dot size={18} className='mr-1' />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='col-span-1 order-1 md:order-2 mb-8 md:mb-0'>
          <h2 className={`text-3xl md:text-4xl mb-4 font-bold text-center ${theme.text} overflow-hidden`}>
            work experience
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Experience;

