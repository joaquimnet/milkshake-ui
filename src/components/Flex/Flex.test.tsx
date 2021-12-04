import React from 'react';
import { render } from '@testing-library/react';

import Flex from './Flex';

describe('Flex', () => {
  test('renders the Flex component', () => {
    render(<Flex label='Hello world!' />);
  });
});
