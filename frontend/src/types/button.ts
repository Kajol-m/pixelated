export type ButtonVariant="primary" | "secondary" | "danger" | "success" | "link";

export interface ButtonProps{
    variant: ButtonVariant;
    onClick:()=>void;
    children: React.ReactNode;
}