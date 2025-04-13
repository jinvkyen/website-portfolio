import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero({ theme }) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Change phrase here:
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = ["Hello, World!", "I do frontend developing."];

  const phraseIndex = useRef(0);
  const charIndex = useRef(0);

  const typingSpeed = 80;
  const deletingSpeed = 40;
  const delayBeforeDeleting = 1200;
  const delayBeforeTyping = 400;

  useEffect(() => {
    let timeout;

    const currentPhrase = phrases[phraseIndex.current];

    if (isTyping) {
      if (charIndex.current < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, charIndex.current + 1));
          charIndex.current += 1;
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delayBeforeDeleting);
      }
    } else {
      if (charIndex.current > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, charIndex.current - 1));
          charIndex.current -= 1;
        }, deletingSpeed);
      } else {
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
        timeout = setTimeout(() => setIsTyping(true), delayBeforeTyping);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, phrases]);

  return (
    <section className='px-8 sm:px-16 xl:px-28 py-10 md:py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        {/* Left Side - Text with animations */}
        <div className='transition-all duration-500 animate-fadeIn'>
          <h1 className='font-bold mb-6 overflow-hidden'>
            <span className={`text-2xl sm:text-4xl xl:text-5xl ${theme.text}`}>{displayText}</span>
            <span className={`text-2xl sm:text-4xl xl:text-5xl ${theme.text} blink`}>|</span>
          </h1>
          <p className={`text-sm md:text-lg xl:text-2xl text-pretty ${theme.accent} max-w-2xl mb-8`}>
            Building websites with modern technologies using React and TailwindCSS.
          </p>
          <div className='absolute animate-bounce'>
            <a href='#projects' aria-label='Scroll down'>
              <ChevronDown size={32} className={theme.text} />
            </a>
          </div>
        </div>

        {/* Right Side - SketchFab asset */}
        <div className='w-full'>
          <div className='aspect-w-1 aspect-h-1 rounded-2xl'>
            <iframe
              title='Apple II Computer'
              allow='autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope'
              src='https://sketchfab.com/models/b5d316548d634f16a72dd503db0aa01b/embed?autostart=1&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0&ui_theme=dark'
              className='w-full h-[200px] md:h-[400px] rounded-none shadow-none'
            />
          </div>

          <p className='text-sm font-normal mt-2 ${theme.accent}'>
            enjoy this 3d model of
            <a
              href='https://sketchfab.com/3d-models/apple-ii-computer-b5d316548d634f16a72dd503db0aa01b?utm_medium=embed&utm_campaign=share-popup&utm_content=b5d316548d634f16a72dd503db0aa01b'
              target='_blank'
              rel='nofollow'
              className='font-bold text-sky-500'>
              {" "}
              Apple II Computer
            </a>{" "}
            by{" "}
            <a
              href='https://sketchfab.com/dark_igorek?utm_medium=embed&utm_campaign=share-popup&utm_content=b5d316548d634f16a72dd503db0aa01b'
              target='_blank'
              rel='nofollow'
              className='font-bold text-sky-500'>
              dark_igorek
            </a>{" "}
            on{" "}
            <a href='https://sketchfab.com' target='_blank' rel='nofollow' className='font-bold text-sky-500'>
              Sketchfab
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
