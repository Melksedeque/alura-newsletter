export interface FormProps {
    onSubmit: (name: string, email: string) => void;
}

export interface User {
    name: string;
    email: string;
}