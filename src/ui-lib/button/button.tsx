import React from 'react';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  disabled: boolean;
  loading: boolean;
  iconPosition: 'left' | 'right' | undefined;
  loadingIcon: string;
  icon: string;
  // loadingIcon: SVGAElement;
  // icon: SVGAElement;
}

const Button = ({
  label,
  variant,
  disabled,
  loading,
  loadingIcon,
  icon,
  iconPosition
}: ButtonProps) => {
  return (
    <button disabled={disabled} className={'core-button ' + variant}>
      {iconPosition === 'left' && icon}
      {loading ? loadingIcon : label}
      {iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
