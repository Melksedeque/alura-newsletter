import { InputProps } from "../../types/Input";

export default function Input({
  type,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  required,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      className="bg-white dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full px-5 py-2 outline-none w-full placeholder:text-gray-400 placeholder:dark:text-gray-600"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
    />
  );
}
