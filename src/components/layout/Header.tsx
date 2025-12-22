import { FaSun, FaMoon } from "react-icons/fa"
import { useScroll } from "../../hooks/useScroll"

type Props = {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const Header = ({ darkMode, toggleDarkMode }: Props) => {
  const { scrollTo } = useScroll()

  return (
    <header className="header-container">
      <div className="header-content">

        <button onClick={() => scrollTo("hero")} className="header-name">
          Brahian <span className="text-primary">Cruz</span>
        </button>

        <nav className="flex items-center gap-4">
          {["about", "skills", "projects"].map((section) => (
            <button key={section} onClick={() => scrollTo(section)} className="header-nav-btn">
              {section}
            </button>
          ))}
        </nav>

        <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="header-toggle-btn">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>
    </header>
  )
}
