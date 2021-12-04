import React from 'react';
import { render } from '@testing-library/react';

import Block from './Block';

describe('Block', () => {
  test('renders the Block component', () => {
    render(<Block label='Hello world!' />);
  });
});
