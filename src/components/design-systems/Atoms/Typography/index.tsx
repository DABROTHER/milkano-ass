import React from 'react';

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption';
    className?: string;
    children?: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({ variant = 'body', className = '', children }) => {
    const baseStyles = 'font-normal leading-normal font-roboto';

    const variantStyles = {
        h1: 'text-4xl font-bold font-roboto',
        h2: 'text-3xl font-bold font-roboto',
        h3: 'text-2xl font-bold font-roboto',
        h4: 'text-xl font-bold font-roboto',
        h5: 'text-lg !font-bold font-roboto',
        h6: 'text-base font-bold font-roboto',
        subtitle: 'text-lg font-medium font-roboto',
        body: 'text-base font-normal font-roboto',
        caption: 'text-sm font-normal font-roboto',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    return <div className={combinedClassName}>{children}</div>;
};

export default Typography;
