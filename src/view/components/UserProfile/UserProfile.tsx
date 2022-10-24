import React from 'react';

import styles from './styles.module.scss';

import userIcon from 'src/assets/images/header/userIcon.png';
import Button from 'src/view/components/Button';
import Profile from 'src/view/components/Profile';
import Modal from 'src/view/components/Modal';
import colors from 'src/constants/colors';
import { useAppSelector } from 'src/hooks';
import useModal from 'src/hooks/useModal';

const UserProfile = () => {
  const { isShown, toggle } = useModal();
  const { username } = useAppSelector((state) => state.auth);
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.user}>
          <img src={userIcon} alt='icon' />
          <Button color={colors.main} border={colors.main} handler={toggle}>
            {username}
          </Button>
        </div>
      </div>
      <Modal isShown={isShown} hide={toggle} modalContent={<Profile />} />
    </>
  );
};

export default UserProfile;
