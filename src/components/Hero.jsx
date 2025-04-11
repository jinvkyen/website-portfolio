import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero({ theme }) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "Hello, World!",
    "I'm an aspiring Developer.",
  ];
  const phrasesRef = useRef(0);
  const charactersRef = useRef(0);
  const typingSpeedRef = useRef(100);
  const deletingSpeedRef = useRef(50);
  const delayRef = useRef(1500);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (charactersRef.current < phrases[phrasesRef.current].length) {
        timeout = setTimeout(() => {
          setDisplayText(phrases[phrasesRef.current].substring(0, charactersRef.current + 1));
          charactersRef.current += 1;
        }, typingSpeedRef.current);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayRef.current);
      }
    } else {
      if (charactersRef.current > 0) {
        timeout = setTimeout(() => {
          setDisplayText(phrases[phrasesRef.current].substring(0, charactersRef.current - 1));
          charactersRef.current -= 1;
        }, deletingSpeedRef.current);
      } else {
        setIsTyping(true);
        phrasesRef.current = (phrasesRef.current + 1) % phrases.length;
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, phrases]);

  return (
    <section className='min-h-screen flex flex-col justify-center items-center px-4 text-center relative'>
      <div className={`transition-all duration-500 animate-fadeIn`}>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
          <span className={theme.text}>{displayText}</span>
          <span className={`${theme.text} animate-blink`}>|</span>
        </h1>

        <p className={`text-xl md:text-2xl ${theme.accent} max-w-2xl mx-auto mb-8`}>
          Building beautiful, interactive web experiences with React and TailwindCSS.
        </p>

        <div className='flex flex-wrap justify-center gap-4'>
          <a
            href='#projects'
            className={`px-6 py-3 rounded-md border-2 border-current ${theme.text} hover:${theme.accent} transition-colors duration-300 font-medium`}>
            View My Work
          </a>
          <a
            href='#contact'
            className={`px-6 py-3 rounded-md bg-opacity-10 bg-current ${theme.text} hover:${theme.accent} transition-colors duration-300 font-medium`}>
            Get In Touch
          </a>
        </div>
      </div>

      <div className='absolute bottom-10 animate-bounce'>
        <a href='#projects' aria-label='Scroll down'>
          <ChevronDown size={32} className={theme.text} />
        </a>
      </div>
    </section>
  );
}
