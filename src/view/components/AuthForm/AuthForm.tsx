import React, { FormEventHandler, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

interface Props {
  title: string;
  subtitle: string;
  link: string;
  linkPath: string;
  button: string;
  handleSubmit: FormEventHandler;
}

const AuthForm = ({
  handleSubmit,
  title,
  subtitle,
  link,
  linkPath,
  button,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={styles.authForm}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>
        {subtitle}
        <NavLink className={styles.link} to={linkPath}>
          {link}
        </NavLink>
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {children}
        <button className={styles.button} type={'submit'}>
          {button}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
