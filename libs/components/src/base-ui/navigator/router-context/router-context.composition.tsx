import React from 'react';
// import { Link } from '@watheia/base-ui.navigator.link';
import { RouterContextType, RouterProvider } from './router-context';

const routingA: RouterContextType = {
  Link: ({ children, ...props }) => (
    <a {...props}>
      {children}{' '}
      <span role="img" aria-hidden>
        🔗
      </span>
    </a>
  ),
};

const routingB: RouterContextType = {
  Link: ({ style, ...props }) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a {...props} style={{ textDecoration: 'none', fontWeight: 'bolder', ...style }} />
  ),
};

export const Preview = () => (
  <div>
    <RouterProvider value={routingA}>
      {/* <span>System 1</span> <Link href="https://watheia.io">Link</Link> */}
    </RouterProvider>
    <br />
    <RouterProvider value={routingB}>
      {/* System 2 <Link href="https://watheia.io">Link</Link> */}
    </RouterProvider>
    <br />
    {/* Default <Link href="https://bit.cloud">Link</Link> */}
  </div>
);
