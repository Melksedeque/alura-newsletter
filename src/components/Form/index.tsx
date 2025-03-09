// Usar typescript para validar os tipos dos campos e as variáveis

import { FormProps } from "../../types/Form";
import React from "react";
import Input from "../Input";

export default function Form({ onSubmit }: FormProps) {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
  });

  const safeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(formState.name, formState.email);
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-auto max-w-lg"
    >
      <Input
        type="text"
        name="name"
        value={formState.name}
        onChange={(value) => setFormState((prev) => ({ ...prev, name: value }))}
        placeholder="Insira seu Name"
        required
      />
      <Input
        type="email"
        name="email"
        value={formState.email}
        onChange={(value) =>
          setFormState((prev) => ({ ...prev, email: value }))
        }
        placeholder="Insira seu Email"
        required
      />
      <button type="submit" className="button-form-login">
        Enviar
      </button>
    </form>
  );
}
