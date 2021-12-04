import React from 'react';
import classnames from 'classnames';

import './Block.css';

export interface BlockProps {
  component?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Block: React.FC<BlockProps> = ({ children, component, className, ...otherProps }) => {
  const Component = component ? component : ('div' as any);
  const classes = classnames('milkshake-block', className);
  return (
    <Component className={classes} {...otherProps}>
      {children}
    </Component>
  );
};

export default Block;
