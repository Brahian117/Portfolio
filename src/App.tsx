import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero/Hero";
import { About } from "./components/sections/About/About";
import { Skills } from "./components/sections/Skills/Skills";
import { Projects } from "./components/sections/Projects/Projects";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const App = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <div
      className="
        min-h-screen
        bg-surface-light text-text-light
        dark:bg-surface-dark dark:text-text-dark
        transition-colors
      "
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="scroll-smooth">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
      </main>

      <Footer />
    </div>
  );
};
