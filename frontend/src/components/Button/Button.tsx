import React from 'react';
import type { ButtonVariant } from '../../types/button';
import type { ButtonProps } from '../../types/button';

const Button: React.FC<ButtonProps>=({variant, onClick, children,className})=>{
    const getButtonClass = (variant: ButtonVariant) => {
        switch(variant) {
            case 'primary':
                return 'bg-white border border-black pt-2 pb-2 pl-5 pr-5 hover:underline underline-offset-4 decoration-1';
            case 'secondary':
                return 'bg-black text-white pt-2 pb-2 pl-5 pr-5 hover:underline underline-offset-4 decoration-1';
            
                //return 'bg-white border border-black pt-2 pb-2 pl-5 pr-5 hover:underline underline-offset-4 decoration-1';
            case 'signup-signin':
                return 'bg-black text-white pt-2 pb-2 pl-5 pr-5 hover:bg-gray-600';
            
            
                default:
                return '';
        }
    };

    return (
        <button className={`${getButtonClass(variant)} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;