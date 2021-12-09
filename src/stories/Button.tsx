/* eslint-disable react/require-default-props */
import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.VFC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
