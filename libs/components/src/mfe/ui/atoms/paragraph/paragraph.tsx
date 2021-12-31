import { Paragraph as BaseParagraph } from '@teambit/base-ui.text.paragraph';
import { PossibleSizes } from '@watheia/theme.styles.sizes';
import classNames from 'clsx';
import React from 'react';
import styles from './paragraph.module.scss';

/**
 * a paragraph component
 */
export type ParagraphProps = {
  /**
   * Font size (from a list of presets).
   */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /**
   * The underlying html element
   */
  element?: 'p' | 'div' | 'span';
} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element.
 */
export function Paragraph({ children, className, size, ...rest }: ParagraphProps) {
  const paragraphSize = size ? PossibleSizes[size] : PossibleSizes.md;
  return (
    <BaseParagraph
      size={paragraphSize}
      {...rest}
      className={classNames(styles['paragraph'], className)}
    >
      {children}
    </BaseParagraph>
  );
}

Paragraph.defaultProps = {
  size: 'md',
  element: 'p',
};
