export interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    testID?: string;
}
