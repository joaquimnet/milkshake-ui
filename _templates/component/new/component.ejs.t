---
to: src/components/<%=Name%>/<%=Name%>.tsx
---
import React from 'react';
import classnames from 'classnames';

import './<%=Name%>.css';

export interface <%=Name%>Props {
  component?: string;
  className?: string;
  style?: React.CSSProperties;
}

const <%=Name%>: React.FC<<%=Name%>Props> = ({ children, component, className, ...otherProps }) => {
  const Component = component ? component : ('div' as any);
  const classes = classnames('milkshake-<%=Name%>', className);
  return (
    <Component className={classes} {...otherProps}>
      {children}
    </Component>
  );
};

export default <%=Name%>;
