export type ButtonVariant="primary" | "secondary" | "signup-signin" | "size-select" | "size-active";

export interface ButtonProps{
    variant: ButtonVariant;
    onClick:()=>void;
    children: React.ReactNode;
    className?: string;
}