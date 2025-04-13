import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

// Change skillset data here:
const techStacks = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://skillicons.dev/icons?i=tailwind",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
];

const repeatedIcons = [...techStacks, ...techStacks];

// Helper function to convert Tailwind class to RGB color
const getTailwindColor = (tailwindClass) => {
  const colorMap = {
    "bg-gray-800": [31, 41, 55],
    "bg-amber-100": [254, 243, 199],
    "bg-black": [0, 0, 0],
    "bg-amber-50": [255, 251, 235],
    "bg-white": [255, 255, 255],
    "bg-slate-900": [15, 23, 42],
    "bg-[#205781]": [32, 87, 129],
    "bg-[#3B1E54]": [59, 30, 84],
  };

  return colorMap[tailwindClass] || [255, 255, 255];
};

export default function Skills({ theme }) {
  const [gradientColor, setGradientColor] = useState("");

  useEffect(() => {
    const rgbValues = getTailwindColor(theme.bg);
    setGradientColor(`rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`);
  }, [theme.bg]);

  return (
    <section id='skills' className='py-30'>
      <div className='container mx-auto flex flex-col'>
        <h2 className={`overflow-hidden text-3xl md:text-4xl font-bold mb-12 text-center ${theme.text}`}>
          technologies
        </h2>
      </div>

      <Marquee
        pauseOnHover
        speed={30}
        gradient={true}
        gradientWidth={200}
        gradientColor={gradientColor}
        className='overflow-x-hidden w-full'>
        <div className='flex gap-10 px-4 items-center'>
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
