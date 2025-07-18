import React from 'react';
import { ButtonProps } from '../types';

export const NativeButton: React.FC<ButtonProps> = ({
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
            primary: { backgroundColor: '#3B82F6', borderColor: '#3B82F6' },
            secondary: { backgroundColor: '#E5E7EB', borderColor: '#E5E7EB' },
            danger: { backgroundColor: '#EF4444', borderColor: '#EF4444' }
        };
        return styles[variant];
    };

    const getTextColor = () => {
        return variant === 'secondary' ? '#1F2937' : '#FFFFFF';
    };

    const getSizeStyles = () => {
        const styles = {
            small: { paddingHorizontal: 12, paddingVertical: 6, fontSize: 14 },
            medium: { paddingHorizontal: 16, paddingVertical: 8, fontSize: 16 },
            large: { paddingHorizontal: 24, paddingVertical: 12, fontSize: 18 }
        };
        return styles[size];
    };

    const buttonStyles = {
        ...getVariantStyles(),
        ...getSizeStyles(),
        borderRadius: 6,
        borderWidth: 1,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        flexDirection: 'row' as const,
        opacity: disabled || loading ? 0.5 : 1,
    };

    const textStyles = {
        color: getTextColor(),
        fontSize: getSizeStyles().fontSize,
        fontWeight: '500' as const,
    };

    // Для React Native (в реальном проекте нужно импортировать из react-native)
    return React.createElement('TouchableOpacity', {
        onPress: disabled || loading ? undefined : onPress,
        style: buttonStyles,
        disabled: disabled || loading,
        testID,
    }, [
        loading && React.createElement('ActivityIndicator', {
            key: 'spinner',
            size: 'small',
            color: getTextColor(),
            style: { marginRight: 8 }
        }),
        React.createElement('Text', {
            key: 'text',
            style: textStyles
        }, loading ? 'Загрузка...' : title)
    ]);
};
