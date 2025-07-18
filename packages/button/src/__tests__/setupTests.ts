import '@testing-library/jest-dom';

// Мокаем React Native компоненты для тестов
jest.mock('react-native', () => ({
    TouchableOpacity: 'TouchableOpacity',
    Text: 'Text',
    ActivityIndicator: 'ActivityIndicator',
    StyleSheet: {
        create: (styles: any) => styles
    }
}));
