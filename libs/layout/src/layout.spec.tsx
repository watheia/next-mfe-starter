import { render } from '@testing-library/react';
import Layout from './layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Layout>
        <p>Hello, World!</p>
      </Layout>
    );
    expect(baseElement).toBeTruthy();
  });
});
