import classNames from 'clsx';
import React from 'react';
import styles from './layout.module.scss';

export type LayoutProps = {} & React.HTMLAttributes<HTMLElement>;

export function Layout({ className, children }: LayoutProps) {
  return <div className={classNames(styles.layout, className)}>{children}</div>;
}
