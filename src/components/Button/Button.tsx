import React, { ReactNode } from 'react';

interface IButton {
  type?: 'button' | 'submit';
  children?: ReactNode;
  className?: string;
  iconLeft?: string;
  iconRight?: string;
}

const Button: React.FC<IButton> = ({
  type = 'button',
  children,
  className,
  iconLeft,
  iconRight,
}) => {
  return (
    <button type={type} className={className}>
      {iconLeft && (
        <span className="me-2">
          <i className={iconLeft} />
        </span>
      )}
      {children}
      {iconRight && (
        <span className="ms-2">
          <i className={iconRight} />
        </span>
      )}
    </button>
  );
};

export default Button;
