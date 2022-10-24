import React, { PropsWithChildren } from 'react';
import { FieldError, RegisterOptions } from 'react-hook-form';

import styles from './styles.module.scss';
import FormError from 'src/view/components/FormError';
import { Register } from 'src/constants/types';

interface Props {
  name: string;
  label: string;
  isVisible?: boolean;
  register: Register;
  registerOptions: RegisterOptions;
  error: FieldError;
}

const Input = ({
  name,
  label,
  isVisible = true,
  register,
  registerOptions,
  error,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        type={isVisible ? 'text' : 'password'}
        className={styles.input}
        id={name}
        {...register(name, registerOptions)}
      />
      <FormError error={error} text={error?.message || 'Error'} />
      {children}
    </div>
  );
};

export default Input;
