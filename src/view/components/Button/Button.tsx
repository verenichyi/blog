import React, { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface Props {
  color: string;
  backColor?: string;
  border?: string;
  handler: () => void;
}

const Button = ({ children, color, backColor, border, handler }: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={handler}
      style={{
        color: color,
        border: border ? `2px solid ${border}` : 'none',
        backgroundColor: backColor || 'transparent',
      }}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
