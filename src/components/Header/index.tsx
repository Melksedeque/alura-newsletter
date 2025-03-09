import ToggleTheme from "../ToggleTheme";

import { HeaderProps } from "../../types/Header";

export default function Header({ user }: HeaderProps) {
  return (
    <header className="header flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center p-5 sm:rounded-xl transition duration-300">
      <h2 className="text-gray-100">Bem-vindo, {user?.name || "Usuário"}!</h2>
      <h1 className="header__title text-gray-100 text-xl hover:scale-110 cursor-pointer transition duration-300">
        Alura Newsletter
      </h1>
      <ToggleTheme />
    </header>
  );
}
