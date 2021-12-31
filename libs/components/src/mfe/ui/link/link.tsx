import type { LinkProps as BaseLinkProps } from '@watheia/base-ui.navigator.link';
import { Link as BaseLink } from '@watheia/base-ui.navigator.link';
import classNames from 'clsx';
import React from 'react';
import styles from './link.module.scss';

export type LinkProps = {} & BaseLinkProps;

export function Link({ children, className, ...rest }: LinkProps) {
  return (
    <BaseLink className={classNames(className, styles.link)} {...rest}>
      {children}
    </BaseLink>
  );
}
