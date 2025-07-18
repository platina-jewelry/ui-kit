import React from 'react';
import { PlatformConfig } from '@types';

export const withPlatform = <P extends Record<string, any>>(
    WebComponent: React.ComponentType<P>,
    NativeComponent: React.ComponentType<P>,
    config: PlatformConfig = {}
) => {
    return (props: P) => {
        const { isNative = false } = config;

        if (isNative) {
            return React.createElement(NativeComponent, props);
        }

        return React.createElement(WebComponent, props);
    };
};
