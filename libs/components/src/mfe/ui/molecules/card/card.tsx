import classNames from 'clsx';
import React from 'react';
import styles from './card.module.scss';

export type CardProps = React.HTMLAttributes<HTMLElement>;

export function Card({ children, className }: CardProps) {
  return <div className={classNames(styles['card'], className)}>{children}</div>;
}
