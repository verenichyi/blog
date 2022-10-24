import React from 'react';
import { animated, useSpring } from 'react-spring';

import styles from './styles.module.scss';
import colors from 'src/constants/colors';
import { scale } from 'src/constants/animations';
import useModal from 'src/hooks/useModal';
import Button from 'src/view/components/Button';
import Modal from 'src/view/components/Modal';
import UserProfile from 'src/view/components/UserProfile';
import NewPost from 'src/view/components/NewPost';

const Header = () => {
  const animationProps = useSpring(scale);
  const { isShown, toggle } = useModal();

  return (
    <animated.header style={animationProps} className={styles.header}>
      <div className={'main-container'}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Blog</h1>
          <div className={styles.button}>
            <Button color={colors.primaryYellow} border={colors.primaryYellow} handler={toggle}>
              Add post
            </Button>
          </div>
          <Modal isShown={isShown} hide={toggle} modalContent={<NewPost hide={toggle} />} />
          <UserProfile />
        </div>
      </div>
    </animated.header>
  );
};

export default Header;
