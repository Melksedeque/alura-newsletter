// Usar typescript para validar os tipos dos campos e as variáveis

import { FormProps } from '../../types/Form';

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
    <form onSubmit={safeSubmit}>
      <input type="text" name="name" placeholder="Insira seu Name" />
      <input type="email" name="email" placeholder="Insira seu Email" />
      <button type="submit">Enviar</button>
    </form>
  );
}