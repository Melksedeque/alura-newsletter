import ToggleTheme from "../ToggleTheme";

import { HeaderProps } from "../../types/Header";

export default function Header({ user }: HeaderProps) {
  return (
    <header className="header flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center p-5 sm:rounded-xl sm:m-5 ">
      <h2 className="text-gray-100">Bem-vindo, {user?.name || "Usuário"}!</h2>
      <h1 className="header__title text-gray-100 text-xl">Alura Newsletter</h1>
      <ToggleTheme />
    </header>
  );
}
