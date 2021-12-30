import { render } from '@testing-library/react';
import { SupaAuthExample } from './supabase-context.composition';

it('should render successfully', () => {
  const { container } = render(<SupaAuthExample />);
  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(container).toMatchSnapshot();
});
