import { useState } from "react";
import { Menu, X, Download, Dice6 } from "lucide-react";

export default function Header({ theme, changeTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`sticky top-0 z-50 ${theme.bg} shadow-md transition-colors duration-300`}>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <span className={theme.text}>@T|jin</span>
        </div>

        <div className='hidden md:flex items-center space-x-8'>
          <nav className='flex space-x-6'>
            <a href='#projects' className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}>
              Projects
            </a>
            <a href='#skills' className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}>
              Skills
            </a>
            <a href='#experience' className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}>
              Experience
            </a>
            <a href='#certificates' className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}>
              Certificates
            </a>
          </nav>

          <div className='flex items-center space-x-4'>
            <button
              onClick={changeTheme}
              className={`p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-300 transition-all`}
              aria-label='Change theme'>
              <Dice6 className={theme.text} size={24} />
            </button>

            <a
              href='/resume.pdf'
              download
              className={`flex items-center space-x-2 border border-current px-4 py-2 rounded-md hover:${theme.accent} transition-colors duration-300`}>
              <Download size={18} />
              <span>Resume</span>
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
              className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Projects
            </a>
            <a
              href='#skills'
              className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Skills
            </a>
            <a
              href='#experience'
              className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Experience
            </a>
            <a
              href='#certificates'
              className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}
              onClick={toggleMenu}>
              Certificates
            </a>

            <div className='flex items-center space-x-4 pt-2'>
              <button
                onClick={changeTheme}
                className='p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-300 transition-all'
                aria-label='Change theme'>
                <Dice6 className={theme.text} size={24} />
              </button>

              <a
                href='/resume.pdf'
                download
                className={`flex items-center space-x-2 border border-current px-4 py-2 rounded-md hover:${theme.accent} transition-colors duration-300`}>
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
