import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero({ theme }) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Change phrase here:

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = ["Hello, world!", "I do frontend developing."];

  const phrasesRef = useRef(0);
  const charactersRef = useRef(0);
  const typingSpeedRef = useRef(100);
  const deletingSpeedRef = useRef(150);
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
        timeout = setTimeout(() => setIsTyping(false), delayRef.current);
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
    <section className='px-16 md:px-28 py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        {/* Left Side - Text with animations */}
        <div className='transition-all duration-500 animate-fadeIn'>
          <h1 className='font-bold mb-6'>
            <span className={`text-3xl md:text-4xl ${theme.text}`}>{displayText}</span>
            <span className={`text-3xl md:text-4xl ${theme.text} animate-blink`}>|</span>
          </h1>
          <p className={`text-xl md:text-2xl ${theme.text} ${theme.accent} max-w-2xl mb-8`}>
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
          <div className='aspect-w-1 aspect-h-1'>
            <iframe
              title='Apple II Computer'
              frameBorder='0'
              allowFullScreen
              mozAllowFullScreen
              webkitAllowFullScreen
              allow='autoplay; fullscreen; xr-spatial-tracking'
              src='https://sketchfab.com/models/b5d316548d634f16a72dd503db0aa01b/embed?autostart=1&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0&ui_theme=dark'
              className='w-full h-[300px] md:h-[400px] rounded-none shadow-none'
            />
          </div>

          <p className='text-sm font-normal mt-2 text-gray-600'>
            enjoy a 3d model:
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
