import React from 'react';
import { render, screen } from '@testing-library/react';
import { withPlatform } from '../hoc/withPlatform';
import { ButtonProps } from '../types';

const MockWebComponent: React.FC<ButtonProps> = ({ title }) => (
  <div data-testid="web-component">{title}</div>
);

const MockNativeComponent: React.FC<ButtonProps> = ({ title }) => (
  <div data-testid="native-component">{title}</div>
);

describe('withPlatform HOC', () => {
  const defaultProps: ButtonProps = {
    title: 'Test Button',
    onPress: jest.fn(),
  };

  it('renders web component when isNative is false', () => {
    const PlatformComponent = withPlatform(
      MockWebComponent,
      MockNativeComponent,
      { isNative: false }
    );

    render(<PlatformComponent {...defaultProps} />);

    expect(screen.getByTestId('web-component')).toBeInTheDocument();
    expect(screen.queryByTestId('native-component')).not.toBeInTheDocument();
  });

  it('renders native component when isNative is true', () => {
    const PlatformComponent = withPlatform(
      MockWebComponent,
      MockNativeComponent,
      { isNative: true }
    );

    render(<PlatformComponent {...defaultProps} />);

    expect(screen.getByTestId('native-component')).toBeInTheDocument();
    expect(screen.queryByTestId('web-component')).not.toBeInTheDocument();
  });

  it('defaults to web component when isNative is not specified', () => {
    const PlatformComponent = withPlatform(
      MockWebComponent,
      MockNativeComponent
    );

    render(<PlatformComponent {...defaultProps} />);

    expect(screen.getByTestId('web-component')).toBeInTheDocument();
  });
});
