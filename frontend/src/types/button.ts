export type ButtonVariant="primary" | "secondary" | "signup-signin" | "success" | "link";

export interface ButtonProps{
    variant: ButtonVariant;
    onClick:()=>void;
    children: React.ReactNode;
    className?: string;
}