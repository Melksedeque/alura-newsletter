export default function Form({ onSubmit }) {
  const safeSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const name = e.target[0].value;
    const email = e.target[1].value;
    console.log(name, email);
    onSubmit(name, email);
  };
  return (
    <form onSubmit={safeSubmit}>
      <input type="text" name="name" placeholder="Insira seu Name" />
      <input type="email" name="email" placeholder="Insira seu Email" />
      <button type="submit">Enviar</button>
    </form>
  );
}
