import Marquee from "react-fast-marquee";

const techIconUrls = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://skillicons.dev/icons?i=tailwind",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
];

const repeatedIcons = [...techIconUrls, ...techIconUrls];

export default function Skills({ theme }) {

  return (
    <section id='skills' className='py-20 px-16 md:px-28'>
      <div className='container mx-auto flex flex-col'>
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme.text}`}>familiar technologies</h2>
      </div>

      <Marquee pauseOnHover speed={30} gradient={false} className='overflow-x-hidden w-full'>
        <div className='flex gap-4 px-4 items-center'>
          {repeatedIcons.map((url, index) => (
            <img
              key={index}
              src={url}
              alt=''
              className='w-12 h-12 object-contain hover:scale-90 transition-transform cursor-pointer'
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
}
