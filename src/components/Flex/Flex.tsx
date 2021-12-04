import React from 'react';
import './Flex.css';

export interface FlexProps {
  label: string;
}

const Flex = (props: FlexProps) => {
  return <button>{props.label}</button>;
};

export default Flex;
