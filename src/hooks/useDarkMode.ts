import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved === "dark";
    }
    return false;
  });

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
};
