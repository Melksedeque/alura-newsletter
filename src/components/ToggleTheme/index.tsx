import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [, setTheme] = useState<"dark" | "light">("light");
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const appClasses = document.documentElement.classList;

  useEffect(() => {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && systemPreference);

    appClasses.toggle("dark", isDarkMode);

    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  const toggle = () => {
    if (document.documentElement.classList.contains("dark")) {
      appClasses.remove("dark");
      localStorage.theme = "light";
    } else {
      appClasses.add("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="h-8 text-gray-100 cursor-pointer block dark:hidden"
        onClick={toggle}
      />
      <SunIcon
        className="h-8 text-gray-100 cursor-pointer hidden dark:block"
        onClick={toggle}
      />
    </div>
  );
}
