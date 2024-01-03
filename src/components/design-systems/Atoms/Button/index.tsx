import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...rest }) => {
    // Define Tailwind CSS classes based on the variant
    const variantClasses = {
        primary: 'bg-[#356646]',
        secondary: 'bg-[#FCC300]',
    }[variant];

    return (
        <button
            className={`text-white font-bold py-2 px-4 ${variantClasses} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
