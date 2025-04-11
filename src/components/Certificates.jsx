export function Certificates({ theme }) {
  const certificates = [
    {
      id: 1,
      name: "IT Specialist - Databases",
      issuer: "Certiport",
      date: "2023",
      image:
        "https://images.credly.com/size/680x680/images/49a492cd-5f72-4c9d-aafa-06649e4853fb/MicrosoftTeams-image__5_.png",
      url: "https://www.credly.com/badges/d2f52898-0076-4274-83c5-01073e964b52/public_url",
    },
    {
      id: 2,
      name: "Responsive Web Design",
      issuer: "FCC",
      date: "2025",
      image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744389969/fcc_slh118.png",
      url: "https://www.freecodecamp.org/certification/jinvkyen/responsive-web-design",
    },
    {
      id: 3,
      name: "JS Algorithms and DSA",
      issuer: "FCC",
      date: "2025",
      image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744389969/fcc_slh118.png",
      url: "https://www.freecodecamp.org/certification/jinvkyen/javascript-algorithms-and-data-structures-v8",
    },
    {
      id: 4,
      name: "Front End Development Libraries",
      issuer: "FCC",
      date: "2025",
      image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744389969/fcc_slh118.png",
      url: "https://www.freecodecamp.org/certification/jinvkyen/front-end-development-libraries",
    },
  ];

  return (
    <section id='certificates' className='py-20 px-8 md:px-28'>
      <div className='flex flex-col container mx-auto'>
        <h2 className={`overflow-hidden text-3xl md:text-4xl font-bold mb-12 text-center ${theme.text}`}>
          achievements
        </h2>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center'>
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target='_blank'
              rel='noopener noreferrer'
              className={`group p-4`}>
              <div className='mb-4 overflow-hidden rounded-md'>
                <img src={cert.image} alt={cert.name} className='w-full h-20 object-contain' />
              </div>
              <h3 className={`text-lg font-bold ${theme.text}`}>{cert.name}</h3>
              <div className='flex justify-between mt-2'>
                <span className={`text-xs ${theme.accent}`}>{cert.issuer}</span>
                <span className={`text-xs ${theme.text} text-opacity-60`}>{cert.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Certificates;
