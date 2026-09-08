import logo from "../assets/logo.svg";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

import { useEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white/80 p-5 backdrop-blur-md dark:bg-zinc-200">
      <img src={logo} className="h-8" alt="Logo da Empresa" />

      <div>
        {/* Adicionado flex e items-center para garantir que o ícone fica perfeitamente centrado */}
        <button
          onClick={toggleTheme}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-zinc-200 transition-colors hover:bg-zinc-300 dark:bg-zinc-500"
        >
          <img
            src={theme === "light" ? iconMoon : iconSun}
            alt="Alternar tema"
            className="h-5 w-5"
          />
        </button>
      </div>
    </div>
  );
}
