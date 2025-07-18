import React from 'react';
import { ButtonProps } from '../types';

export const WebButton: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabled = false,
    variant = 'primary',
    size = 'medium',
    loading = false,
    testID
}) => {
    const getVariantStyles = () => {
        const styles = {
            primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
            secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
            danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500'
        };
        return styles[variant];
    };

    const getSizeStyles = () => {
        const styles = {
            small: 'px-3 py-1 text-sm',
            medium: 'px-4 py-2 text-base',
            large: 'px-6 py-3 text-lg'
        };
        return styles[size];
    };

    const baseStyles = 'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

    const className = [
        baseStyles,
        getVariantStyles(),
        getSizeStyles(),
        disabledStyles
    ].filter(Boolean).join(' ');

    return (
        <button
            onClick={onPress}
            disabled={disabled || loading}
            className={className}
            data-testid={testID}
        >
            {loading ? (
                <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Загрузка...
                </span>
            ) : (
                title
            )}
        </button>
    );
};
