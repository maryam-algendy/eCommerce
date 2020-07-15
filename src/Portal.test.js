import React from 'react';
import { render } from '@testing-library/react';
import Portal from './Portal';

test('renders learn react link', () => {
  const { getByText } = render(<Portal />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
