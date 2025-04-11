export function Certificates({ theme }) {
  const certificates = [
    {
      id: 1,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/api/placeholder/300/200",
      url: "https://credential.example.com/react-cert",
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      issuer: "Udemy",
      date: "2022",
      image: "/api/placeholder/300/200",
      url: "https://credential.example.com/js-cert",
    },
    {
      id: 3,
      name: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "2022",
      image: "/api/placeholder/300/200",
      url: "https://credential.example.com/uiux-cert",
    },
    {
      id: 4,
      name: "Web Accessibility",
      issuer: "W3C",
      date: "2021",
      image: "/api/placeholder/300/200",
      url: "https://credential.example.com/a11y-cert",
    },
  ];

  return (
    <section id='certificates' className='py-20 px-4'>
      <div className='container mx-auto'>
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme.text}`}>
          Certificates & Achievements
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target='_blank'
              rel='noopener noreferrer'
              className={`group p-4 rounded-lg shadow-md ${theme.bg} border border-opacity-10 border-current transform transition-transform duration-300 hover:-translate-y-2`}>
              <div className='mb-4 overflow-hidden rounded-md'>
                <img
                  src={cert.image}
                  alt={cert.name}
                  className='w-full h-40 object-cover transform transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <h3 className={`text-lg font-bold ${theme.text}`}>{cert.name}</h3>
              <div className='flex justify-between mt-2'>
                <span className={theme.accent}>{cert.issuer}</span>
                <span className={`${theme.text} text-opacity-60`}>{cert.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Certificates;