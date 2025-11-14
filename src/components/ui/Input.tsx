import { InputHTMLAttributes, useId } from 'react';
import cx from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, id, className = '', ...props }: InputProps) {
  const inputId = id || useId();

  const inputClasses = cx(
    'w-full px-3 py-2 border rounded',
    className,
    { 'border-red-500': error, 'border-gray-300': !error }
  );

  return (
    <div>
    {label && (
      <label
        htmlFor={inputId}
        className={cx("block text-sm font-medium mb-1", {['text-red-600']: error})}
      >
        {label}
      </label>
    )}
      <input
        id={inputId}
        className={inputClasses}
        {...props}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}