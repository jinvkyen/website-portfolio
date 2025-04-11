import { useState } from "react";
import { Menu, X, Download, DicesIcon } from "lucide-react";

export default function Header({ theme, changeTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`sticky top-0 z-50 ${theme.bg} transition-colors duration-300`}>
      <div className='container mx-auto px-8 md:px-28 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <span className={`flex items-center gap-2 ${theme.text}`}>
            {/* Change Logo here*/}
            <img
              src='https://res.cloudinary.com/diolcqc1f/image/upload/v1744387272/logo_qjfhso.png'
              alt='logo'
              width={40}
              height={40}
              className={`bg-current rounded-xl p-1.5`}
            />
            {/* Change Text here */}
            <span className={theme.text}>| portfolio</span>
          </span>
        </div>

        <div className='hidden md:flex items-center space-x-8'>
          <div className='flex items-center space-x-4'>
            <button
              onClick={changeTheme}
              className={`p-2 rounded-full bg-transparent hover:bg-opacity-20 hover:bg-gray-300 transition-all`}
              aria-label='Change theme'>
              <DicesIcon className={theme.text} size={30} />
            </button>

            {/* Resume/CV button */}
            <a
              href='/cv.pdf'
              download
              className={`flex items-center space-x-2 border border-current px-4 py-3 rounded-md transition-colors duration-300 hover:${theme.bg}`}>
              <Download size={18} />
              <span>download CV</span>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${theme.bg} px-4 py-4 transition-all duration-500`}>
          <nav className='flex flex-col space-y-4'>
            <a
              href='#projects'
              className={`text-lg ${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Projects
            </a>
            <a
              href='#skills'
              className={`text-lg ${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Skills
            </a>
            <a
              href='#experience'
              className={`text-lg ${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Experience
            </a>
            <a
              href='#certificates'
              className={`text-lg ${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Certificates
            </a>

            <div className='flex items-center space-x-4 pt-2'>
              <button
                onClick={changeTheme}
                className='p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-300 transition-all'
                aria-label='Change theme'>
                <DicesIcon className={theme.text} size={26} />
              </button>

              <a
                href='/resume.pdf'
                download
                className={`flex items-center text-lg space-x-2 border border-current px-4 py-2 rounded-md hover:${theme.accent} transition-colors duration-300`}>
                <Download size={18} />
                <span>Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
