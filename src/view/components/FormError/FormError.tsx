import React from 'react';
import { FieldError } from 'react-hook-form';
import styles from './style.module.scss';

const FormError = ({ text, error }: { text: string; error: FieldError | boolean }) => (
  <span style={{ visibility: `${error ? 'visible' : 'hidden'}` }} className={styles.error}>
    {text}
  </span>
);

export default FormError;
