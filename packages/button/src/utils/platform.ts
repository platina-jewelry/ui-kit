export const detectPlatform = (): boolean => {
    // Проверяем наличие React Native окружения
    return typeof window === 'undefined' && typeof navigator === 'undefined';
};

export const isReactNative = (): boolean => {
    try {
        return typeof require !== 'undefined' && !!require('react-native');
    } catch {
        return false;
    }
};
