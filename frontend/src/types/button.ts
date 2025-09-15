export type ButtonVariant="primary" | "secondary" | "signup-signin" | "size-select" | "size-active" | "user-dropdown";

export interface ButtonProps{
    variant: ButtonVariant;
    onClick?:()=>void;
    children: React.ReactNode;
    className?: string;
    type?:"button" | "submit" | "reset";
    disabled?: boolean;
}