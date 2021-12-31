import React from 'react';
import { Link } from './link';

export const BasicLink = () => <Link href="/about">About</Link>;

export const ExternalLink = () => (
  <Link href="https://watheia.io" external>
    Bit
  </Link>
);
