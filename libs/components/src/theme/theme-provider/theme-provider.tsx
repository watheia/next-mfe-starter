import { bookFont } from '@watheia/theme.fonts.book';
import { brands } from '@watheia/theme.styles.brand-definition';
import { primaryPalette } from '@watheia/theme.styles.color-definition';
import { headingMargins } from '@watheia/theme.styles.heading-margin-definition';
import { shadowTheme } from '@watheia/theme.styles.shadow-definition';
import { headingFontSize, textFontSize } from '@watheia/theme.styles.size-definition';
import classNames from 'clsx';
import React from 'react';
import texts from './texts.module.scss';

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        headingFontSize,
        textFontSize,
        bookFont,
        shadowTheme,
        primaryPalette,
        brands,
        headingMargins,
        texts.defaults,
        props.className
      )}
    ></div>
  );
}
