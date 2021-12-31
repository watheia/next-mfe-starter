import classNames from 'clsx';
import React from 'react';
import styles from './figma-embed.module.scss';

export type FigmaEmbedProps = {} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export function FigmaEmbed({ className, ...rest }: FigmaEmbedProps) {
  return <iframe {...rest} className={classNames(styles.iframe, className)}></iframe>;
}

FigmaEmbed.defaultProps = {
  allowFullScreen: true,
  loading: 'lazy',
  width: '100%',
  height: '600px',
};
