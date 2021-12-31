import classNames from 'clsx';
import React from 'react';
// import styles from './img.module.scss';

export type ImageProps = {
  /**
   * image src
   */
  src: string;
  /**
   * image alternative text
   */
  alt: string;
  /**
   * lazy load image
   */
  loading?: 'lazy' | 'eager';
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Image({ alt, src, loading, className }: ImageProps) {
  return <img className={classNames(className)} alt={alt} src={src} loading={loading} />;
}
