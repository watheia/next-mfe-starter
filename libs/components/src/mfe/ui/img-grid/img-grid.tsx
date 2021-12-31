import { Img } from '@watheia/mfe.ui.img';
import { Product } from '@watheia/model.entity.product';
import classNames from 'clsx';
import React from 'react';
import styles from './img-grid.module.scss';

export type ImgGridProps = {
  /**
   * a list of products
   */
  list: Product[];
} & React.HTMLAttributes<HTMLDivElement>;

export function ImgGrid({ list, className, ...props }: ImgGridProps) {
  return (
    <div data-testid="watheia.mfe/molecules/product-grid" {...props}>
      {list.length > 0 ? (
        <div className={classNames(styles['grid'], className)}>
          {list.map((product) => (
            <Img
              key={product.title}
              {...product}
              className={classNames(styles['img'], className)}
            />
          ))}
        </div>
      ) : (
        'No images to display'
      )}
    </div>
  );
}
