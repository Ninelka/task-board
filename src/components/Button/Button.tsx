import React, { ReactNode } from 'react';

interface IButton {
  type?: 'button' | 'submit';
  children?: ReactNode;
  className?: string;
  iconLeft?: string;
  iconRight?: string;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  type = 'button',
  children,
  className,
  iconLeft,
  iconRight,
  onClick,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
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
