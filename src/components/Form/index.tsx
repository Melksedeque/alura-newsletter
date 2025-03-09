// Usar typescript para validar os tipos dos campos e as variáveis

import { FormProps } from "../../types/Form";

export default function Form({ onSubmit }: FormProps) {
  const safeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.target as HTMLFormElement;
    const nameInput = form[0] as HTMLInputElement;
    const emailInput = form[1] as HTMLInputElement;
    onSubmit(nameInput.value, emailInput.value);
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col items-center justify-center gap-10 -mt-20"
    >
      <input type="text" name="name" placeholder="Insira seu Name" />
      <input type="email" name="email" placeholder="Insira seu Email" />
      <button
        type="submit"
        className="bg-alura-100 dark:bg-dark-200 cursor-pointer rounded-full text-gray-200 py-1 px-5 uppercase"
      >
        Enviar
      </button>
    </form>
  );
}
