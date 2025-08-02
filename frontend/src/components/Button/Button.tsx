import React from 'react';
import type { ButtonVariant } from '../../types/button';
import type { ButtonProps } from '../../types/button';

const Button: React.FC<ButtonProps>=({variant, onClick, children})=>{
    const getButtonClass = (variant: ButtonVariant) => {
        switch(variant) {
            case 'primary':
                return 'bg-[#FFB6C1]';
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
        <button className={getButtonClass(variant)} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;