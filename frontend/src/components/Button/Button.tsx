import React from 'react';
import type { ButtonVariant } from '../../types/button';
import type { ButtonProps } from '../../types/button';

const Button: React.FC<ButtonProps>=({variant, onClick, children,className})=>{
    const getButtonClass = (variant: ButtonVariant) => {
        switch(variant) {
            case 'primary':
                return 'bg-white border border-black pt-2 pb-2 pl-5 pr-5 hover:underline';
            case 'secondary':
                return 'bg-[#8E7DBE]';
            case 'danger':
                return 'bg-[#F4F8D3]';
            case 'success':
                return 'bg-[#FFF8DC]';
            case 'link':
                return 'text-[#4A4A4A]';
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