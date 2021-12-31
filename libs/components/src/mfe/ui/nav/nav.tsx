import classNames from 'clsx';
import React from 'react';
import styles from './nav.module.scss';

export type NavProps = {} & React.HTMLAttributes<HTMLElement>;

export function Nav({ children, className }: NavProps) {
  return <nav className={classNames(styles.nav, className)}>{children}</nav>;
}
