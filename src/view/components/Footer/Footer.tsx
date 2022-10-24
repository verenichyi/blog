import React from 'react';
import { animated, useSpring } from 'react-spring';

import styles from './styles.module.scss';
import { scale } from 'src/constants/animations';

const Footer = () => {
  const animationProps = useSpring(scale);

  return (
    <animated.footer style={animationProps} className={styles.footer}>
      <div className={'main-container'}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Blog</h2>
          <span className={styles.description}>Pet App</span>
        </div>
      </div>
    </animated.footer>
  );
};

export default Footer;
