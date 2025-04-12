import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const colorThemes = [
  { name: "Yellow & Gray", text: "text-yellow-400", bg: "bg-gray-800", accent: "text-yellow-300" },
  { name: "Blue & Cream", text: "text-blue-700", bg: "bg-amber-100", accent: "text-blue-500" },
  { name: "Black & White", text: "text-white", bg: "bg-black", accent: "text-gray-300" },
  { name: "Red & Beige", text: "text-red-700", bg: "bg-amber-50", accent: "text-red-500" },
  { name: "Green & White", text: "text-emerald-700", bg: "bg-white", accent: "text-emerald-500" },
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
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} transition-colors duration-500`}>
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
