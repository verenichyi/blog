import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring';

import icons from 'src/assets/svg/icons.svg';
import useOnClickOutside from 'src/hooks/useOnClickOutside';
import styles from './style.module.scss';

interface Props {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}

const Modal = ({ isShown, hide, modalContent }: Props) => {
  const ref = useRef();

  const transitions = useTransition(isShown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
  });

  useEffect(() => {
    if (isShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isShown]);

  useOnClickOutside(ref, hide);

  const modal = transitions(
    (style, item) =>
      item && (
        <animated.div style={style} className={styles.backdrop}>
          <div ref={ref} className={styles.modal}>
            <svg className={styles.closeButton} onClick={hide} data-testid={'closeBtn'}>
              <use xlinkHref={`${icons}#cross`} />
            </svg>
            {modalContent}
          </div>
        </animated.div>
      ),
  );

  return isShown ? ReactDOM.createPortal(modal, document.getElementById('modal')) : null;
};

export default Modal;
