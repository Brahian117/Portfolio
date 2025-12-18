import { FaSun, FaMoon } from "react-icons/fa";
import { useScroll } from "../../hooks/useScroll";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const Header = ({ darkMode, toggleDarkMode }: Props) => {
  const { scrollTo } = useScroll();

  return (
    <header className="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo / Nombre */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-bold text-lg text-hd-light dark:text-hd-dark hover:text-primary transition-colors"
        >
          HOME
        </button>

        {/* Navegación */}
        <nav className="flex items-center gap-2">
          {["about", "skills", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="px-3 py-2 rounded-md text-sm font-medium text-text-light dark:text-text-dark hover:bg-primary hover:text-white dark:hover:bg-primary-hover transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          {/* Toggle Dark Mode */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="ml-2 p-2 rounded-md border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white dark:hover:bg-primary-hover transition-colors"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};
