import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ToggleTheme() {
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
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
