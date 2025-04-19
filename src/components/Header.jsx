import { useState } from "react";
import { Computer, X, Download, DicesIcon } from "lucide-react";

export default function Header({ theme, changeTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`sticky top-0 z-50 ${theme.bg} transition-colors duration-300`}>
      <div className='container mx-auto px-8 xl:px-28 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <span className={`flex items-center gap-2 ${theme.text}`}>
            {/* Change Logo here*/}
            <img
              src='https://res.cloudinary.com/diolcqc1f/image/upload/v1744387272/logo_qjfhso.png'
              alt='logo'
              className={`bg-current rounded-xl p-1.5 w-10 h-10 sm:w-16 sm:h-16 md:w-10 md:h-10`}
            />
            {/* Change Text here */}
            <span className={`text-xl sm:text-3xl xl:text-2xl ${theme.text} overflow-hidden`}>| portfolio</span>
          </span>
        </div>

        <div className='hidden xl:flex items-center space-x-8'>
          <div className='flex items-center'>
            <button onClick={changeTheme} className={`transition-all`} aria-label='Change theme'>
              <DicesIcon className={`sm:w-13 sm:h-10 ${theme.text}`} />
            </button>

            {/* Resume/CV button */}
            <a
              href='/assets/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className={`flex items-center space-x-2 border border-current px-4 py-3 rounded-md transition-colors duration-300 hover:${theme.bg}`}>
              <Download size={18} />
              <span>resume</span>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button className='xl:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <X className='sm:w-13 sm:h-10' /> : <Computer className='sm:w-13 sm:h-10' />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`xl:hidden ${theme.bg} px-8 sm:px-16 xl:px-28 py-4 sm:py-12 transition-all duration-500`}>
          <nav className='flex flex-col sm:space-y-16 space-y-8'>
            <a
              href='#projects'
              className={`text-lg sm:text-2xl ${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Projects
            </a>
            <a
              href='#skills'
              className={`text-lg sm:text-2xl ${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Skills
            </a>
            <a
              href='#experience'
              className={`text-lg sm:text-2xl ${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Experience
            </a>
            <a
              href='#certificates'
              className={`text-lg sm:text-2xl ${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Certificates
            </a>

            <div className='flex items-center sm:space-x-6 pt-2'>
              <button onClick={changeTheme} className='transition-all' aria-label='Change theme'>
                <DicesIcon className={`relative right-4 sm:w-14 sm:h-12 {theme.text}`} />
              </button>

              <a
                href='/assets/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className={`relative right-4 flex items-center text-lg space-x-2 border border-current px-4 py-2 rounded-md hover:${theme.accent} transition-colors duration-300`}>
                <Download className={`sm:w-14 sm:h-12 {theme.text}`} />
                <span className='text-lg sm:text-3xl'>resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
