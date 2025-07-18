import React from 'react';

interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    testID?: string;
}

interface PlatformConfig {
    isNative?: boolean;
}

declare const Button: (props: ButtonProps) => React.ReactElement<ButtonProps, string | React.JSXElementConstructor<any>>;

declare const WebButton: React.FC<ButtonProps>;

declare const NativeButton: React.FC<ButtonProps>;

declare const withPlatform: <P extends Record<string, any>>(WebComponent: React.ComponentType<P>, NativeComponent: React.ComponentType<P>, config?: PlatformConfig) => (props: P) => React.ReactElement<P, string | React.JSXElementConstructor<any>>;

export { Button, ButtonProps, NativeButton, PlatformConfig, WebButton, withPlatform };
