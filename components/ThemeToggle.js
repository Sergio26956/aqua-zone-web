import { useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-800 text-white px-4 py-2 rounded-lg"
    >
      {darkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
}
