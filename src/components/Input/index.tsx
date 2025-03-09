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
      className="input-form-login"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
    />
  );
}
