import { Github, Linkedin } from "lucide-react";

export default function Footer({ theme }) {
  const currentYear = new Date().getFullYear();

  // Edit author footer data here:
  const author = {
    name: "jinvkyen",
    githubUrl: "https://github.com/jinvkyen",
    linkedInUrl: "https://www.linkedin.com/in/ayen-t-3a2950312/",
  };

  return (
    <footer id='contact' className={`py-12 ${theme.bg} border-t border-opacity-10 border-current`}>
      <div className='flex flex-col mx-auto '>
        <div className='flex flex-col md:flex-row justify-between items-center px-8 md:px-28'>
          <p className={`${theme.text} text-opacity-60`}>
            © {currentYear} {author.name}. Made with 💛 using React & TailwindCSS
          </p>
          <div className='flex space-x-6'>
            <a
              href={author.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}
              aria-label='GitHub'>
              <Github size={24} />
            </a>
            <a
              href={author.linkedInUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={`${theme.text} hover:${theme.accent} transition-colors duration-300`}
              aria-label='LinkedIn'>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
