import React from 'react';
import { render } from '@testing-library/react';
import { BasicNav } from './navigator.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNav />);
  const rendered = getByText('link 1');
  expect(rendered).toBeTruthy();
});
