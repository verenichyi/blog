import React from 'react';
import { Oval } from 'react-loader-spinner';

import colors from 'src/constants/colors';
import styles from './styles.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Oval height={100} width={100} color={colors.primaryYellow} />
    </div>
  );
};

export default Loader;
