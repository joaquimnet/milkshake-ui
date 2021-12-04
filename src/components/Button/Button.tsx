import React from 'react';
import classnames from 'classnames';

import './Button.css';

export interface ButtonProps {
  label: string;
  component?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  component,
  className,
  label,
  ...otherProps
}) => {
  const Component = component ? component : ('button' as any);
  const classes = classnames('milkshake-Button', className);
  return (
    <Component className={classes} {...otherProps}>
      {label}
    </Component>
  );
};

export default Button;
