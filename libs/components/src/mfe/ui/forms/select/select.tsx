import classNames from 'clsx';
import React from 'react';
import styles from './select.module.scss';

export type SelectProps = {
  /**
   * array of options to be displayed in the select
   */
  options: Array<any>;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export function Select({ className, options, children, ...rest }: SelectProps) {
  return (
    <select className={classNames(styles.select, className)} {...rest}>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
}
