import React from 'react';
import { PlatformConfig } from '@types';
export declare const withPlatform: <P extends Record<string, any>>(WebComponent: React.ComponentType<P>, NativeComponent: React.ComponentType<P>, config?: PlatformConfig) => (props: P) => React.ReactElement<P, string | React.JSXElementConstructor<any>>;
//# sourceMappingURL=withPlatform.d.ts.map