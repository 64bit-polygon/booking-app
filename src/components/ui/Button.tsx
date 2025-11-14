import { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  className?: string;
  fullWidth?: boolean;
}

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  fullWidth,
  ...props
}: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded cursor-pointer disabled:cursor-default disabled:opacity-50';

  // primary variant
  const primaryClasses = 'bg-blue-600 text-white hover:bg-blue-700';
  
  // secondary variant
  const secondaryClasses = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  
  // width classes
  const widthClasses = {
    ['w-full']: fullWidth,
    ['w-auto']: !fullWidth
  };

  const buttonClasses = cx(
    baseClasses,
    variant === 'primary' ? primaryClasses : secondaryClasses,
    widthClasses,
    className
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;