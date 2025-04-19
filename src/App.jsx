import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

// Add color themes here:
const colorThemes = [
  {
    name: "Shades of Purple",
    text: "text-[#D4BEE4]",
    bg: "bg-[#3B1E54]",
    accent: "text-[#9B7EBD]",
    texts: "text-[#3B1E54]",
    bgs: "bg-[#9B7EBD]",
    bgls: "bg-[#D4BEE4]",
  },
  {
    name: "Green & White",
    text: "text-emerald-700",
    bg: "bg-white",
    accent: "text-emerald-500",
    texts: "text-white",
    bgs: "bg-emerald-500",
    bgls: "bg-emerald-700",
  },
  {
    name: "Red & Beige",
    text: "text-red-700",
    bg: "bg-amber-50",
    accent: "text-red-500",
    texts: "text-amber-50",
    bgs: "bg-red-500",
    bgls: "bg-red-700",
  },
  {
    name: "Blue & Cream",
    text: "text-blue-700",
    bg: "bg-amber-100",
    accent: "text-blue-500",
    texts: "text-amber-100",
    bgs: "bg-blue-500",
    bgls: "bg-blue-700",
  },
  {
    name: "Black & White",
    text: "text-white",
    bg: "bg-black",
    accent: "text-gray-300",
    texts: "text-black",
    bgs: "bg-gray-300",
    bgls: "bg-white",
  },
  {
    name: "Blue & Mint",
    text: "text-[#B5FCCD]",
    bg: "bg-[#205781]",
    accent: "text-[#7AC6C0]",
    texts: "text-[#205781]",
    bgs: "bg-[#7AC6C0]",
    bgls: "bg-[#B5FCCD]",
  },
];

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = colorThemes[themeIndex];

  const changeTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % colorThemes.length);
  };

  useEffect(() => {
    document.body.className = currentTheme.bg;
  }, [currentTheme.bg]);

  return (
    <div className={`h-dvh ${currentTheme.bg} ${currentTheme.text} transition-colors duration-500`}>
      <Header theme={currentTheme} changeTheme={changeTheme} />
      <Hero theme={currentTheme} />
      <Skills theme={currentTheme} />
      <Experience theme={currentTheme} />
      <Certificates theme={currentTheme} />
      <Projects theme={currentTheme} />
      <Footer theme={currentTheme} />
    </div>
  );
}

export default App;
