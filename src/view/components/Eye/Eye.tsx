import React from 'react';

import styles from './styles.module.scss';
import icons from 'src/assets/svg/icons.svg';

const Eye = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <svg className={styles.eye} onClick={handleClick}>
      <use xlinkHref={`${icons}#eye`} />
    </svg>
  );
};

export default Eye;
