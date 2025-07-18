import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { WebButton } from '../components/Button.web';
import { ButtonProps } from '../types';

describe('WebButton', () => {
    const defaultProps: ButtonProps = {
        title: 'Test Button',
        onPress: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders button with correct title', () => {
        render(<WebButton {...defaultProps} />);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('calls onPress when clicked', () => {
        const onPress = jest.fn();
        render(<WebButton {...defaultProps} onPress={onPress} />);

        fireEvent.click(screen.getByText('Test Button'));
        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('is disabled when disabled prop is true', () => {
        render(<WebButton {...defaultProps} disabled={true} />);

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('shows loading state', () => {
        render(<WebButton {...defaultProps} loading={true} />);

        expect(screen.getByText('Загрузка...')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('applies correct variant classes', () => {
        const { rerender } = render(<WebButton {...defaultProps} variant="primary" />);
        let button = screen.getByRole('button');
        expect(button).toHaveClass('bg-blue-500');

        rerender(<WebButton {...defaultProps} variant="secondary" />);
        button = screen.getByRole('button');
        expect(button).toHaveClass('bg-gray-200');

        rerender(<WebButton {...defaultProps} variant="danger" />);
        button = screen.getByRole('button');
        expect(button).toHaveClass('bg-red-500');
    });

    it('applies correct size classes', () => {
        const { rerender } = render(<WebButton {...defaultProps} size="small" />);
        let button = screen.getByRole('button');
        expect(button).toHaveClass('px-3', 'py-1');

        rerender(<WebButton {...defaultProps} size="medium" />);
        button = screen.getByRole('button');
        expect(button).toHaveClass('px-4', 'py-2');

        rerender(<WebButton {...defaultProps} size="large" />);
        button = screen.getByRole('button');
        expect(button).toHaveClass('px-6', 'py-3');
    });

    it('sets testID correctly', () => {
        render(<WebButton {...defaultProps} testID="test-button" />);

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('data-testid', 'test-button');
    });
});
