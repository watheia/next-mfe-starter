import { render } from '@testing-library/react';

import Temp from './Temp';

describe('Temp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Temp />);
    expect(baseElement).toBeTruthy();
  });
});
