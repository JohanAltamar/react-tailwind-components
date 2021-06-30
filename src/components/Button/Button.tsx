import React from 'react';
import './button.css';

export type colors = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
export type tones = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  backgroundColor?: `bg-${colors}-${tones}`;
}

const btnSize = {
  'small': 'p-2',
  'medium': 'p-3',
  'large': 'p-4',
};

export const Button:React.FC<ButtonProps> = ({ primary=false, backgroundColor = 'bg-blue-200', size='medium', label, ...props }) => {
  return (
    <button
      type="button"
      // className={['storybook-button', `storybook-button--${size}`, 'bg-green-100', mode].join(' ')}
      className={[btnSize[size], backgroundColor].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
