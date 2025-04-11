import { Github, Linkedin } from "lucide-react";

export default function Footer({ theme }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contact' className={`py-12 ${theme.bg} border-t border-opacity-10 border-current`}>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <h2 className={`text-2xl font-bold ${theme.text}`}>@T|jin</h2>
            <p className={`${theme.accent} mt-2`}>Building the web, one line a  t a time.</p>
          </div>

          <div className='flex space-x-6'>
            <a
              href='https://github.com/tjin'
              target='_blank'
              rel='noopener noreferrer'
              className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}
              aria-label='GitHub'>
              <Github size={24} />
            </a>
            <a
              href='https://linkedin.com/in/tjin'
              target='_blank'
              rel='noopener noreferrer'
              className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}
              aria-label='LinkedIn'>
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-opacity-10 border-current text-center'>
          <p className={`${theme.text} text-opacity-60`}>
            © {currentYear}. Made with 💛 using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
