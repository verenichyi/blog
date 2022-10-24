import React, { ChangeEvent, startTransition, useEffect, useState } from 'react';

import styles from './search-input.module.scss';
import icons from 'src/assets/svg/icons.svg';

interface Props {
  handleSearch: (value: string) => void;
}

const SearchInput = ({ handleSearch }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    startTransition(() => {
      setValue(event.target.value);
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(value);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <input className={styles.input} onChange={handleChange} value={value} />
        <svg className={styles.icon}>
          <use xlinkHref={`${icons}#searchIcon`} />
        </svg>
      </div>
    </form>
  );
};

export default SearchInput;
