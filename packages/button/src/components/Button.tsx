import React from 'react';
import { ButtonProps } from '../types';
import { WebButton } from './Button.web';
import { NativeButton } from './Button.native';
import { withPlatform } from '../hoc/withPlatform';
import { detectPlatform } from '../utils/platform';

// Автоматическое определение платформы
const isNative = detectPlatform();

const Button = withPlatform<ButtonProps>(
    WebButton,
    NativeButton,
    { isNative }
);

export default Button;

// Экспорт для ручного выбора платформы
export const createPlatformButton = (isNative: boolean) =>
    withPlatform<ButtonProps>(WebButton, NativeButton, { isNative });
