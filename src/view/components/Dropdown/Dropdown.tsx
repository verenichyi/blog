import React, { useRef, useState } from 'react';

import styles from './styles.module.scss';
import icons from 'src/assets/svg/icons.svg';
import useOnClickOutside from 'src/hooks/useOnClickOutside';

interface Props {
  selected: string;
  setSelected: (name: string, option: string) => void;
  options: string[];
  name?: string;
}

const Dropdown = ({ options, selected, setSelected, name }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  const handleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOption = (name: string, option: string): void => {
    setSelected(name, option);
    setIsActive(false);
  };

  useOnClickOutside(ref, () => setIsActive(false));

  return (
    <div ref={ref} className={styles.dropdown}>
      <div className={styles.btn} onClick={handleDropdown}>
        <span>{selected}</span>
        <svg className={`${styles.icon} ${isActive ? styles.active : ''}`}>
          <use xlinkHref={`${icons}#dropdownArrow`} />
        </svg>
      </div>
      {isActive && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              data-name={name}
              className={styles.option}
              key={option}
              onClick={(event) => handleOption(event.currentTarget.dataset.name, option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
