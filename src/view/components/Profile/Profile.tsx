import React, { ChangeEvent, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import styles from './styles.module.scss';

import Button from 'src/view/components/Button';
import userPhoto from 'src/assets/images/profile/userPhoto.jpg';
import camera from 'src/assets/images/profile/camera.png';
import { useAppSelector } from 'src/hooks';
import colors from 'src/constants/colors';
import { scale } from 'src/constants/animations';
import useActions from 'src/hooks/useActions';
import { authActions } from 'src/redux/slices/authorization';

const Profile = () => {
  const animationProps = useSpring(scale);
  const { username } = useAppSelector((state) => state.auth);
  const { signOut } = useActions(authActions);
  const [profilePhoto, setProfilePhoto] = useState(userPhoto);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result);
      setProfilePhoto(result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <animated.div style={animationProps} className={styles.profile}>
      <div className={styles.profileDetails}>
        <div className={styles.userPhoto}>
          <input
            className={styles.fileInput}
            onChange={onChangeFile}
            type='file'
            name='avatar'
            id='avatar'
            accept='image/*'
          />
          <label htmlFor='avatar'>
            <div className={styles.overlay}>
              <img src={camera} alt='camera' />
            </div>
          </label>
          <img src={profilePhoto} alt='photo' />
        </div>
        <div className={styles.userInfo}>
          <h2 className={styles.name}>{username}</h2>
          <Button color={colors.primaryYellow} border={colors.primaryYellow} handler={signOut}>
            Log out
          </Button>
        </div>
      </div>
    </animated.div>
  );
};

export default Profile;
