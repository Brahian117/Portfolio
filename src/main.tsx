import React from "react";
import ReactDOM from "react-dom/client";

import {App} from "./App";
import "./index.css";

import { useDarkMode } from "./hooks/useDarkMode";

export const Root = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return <App darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
