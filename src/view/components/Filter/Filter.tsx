import React from 'react';

import styles from './styles.module.scss';

import Dropdown from 'src/view/components/Dropdown';
import SearchInput from 'src/view/components/SearchInput';
import useActions from 'src/hooks/useActions';
import { filterByOptions, filterSelect, sortSelect } from 'src/constants/blog';
import { useAppSelector } from 'src/hooks';
import { blogActions } from 'src/redux/slices/blog';

const Filter = ({ handleReset }: { handleReset: () => void }) => {
  const { setSortBy, setFilterBy, setSearchValue } = useActions(blogActions);
  const { sortBy, filterBy } = useAppSelector((state) => state.blog);

  const handleDropdown = (name: string, value: string): void => {
    switch (name) {
      case sortSelect.name:
        setSortBy(value);
        break;
      case filterSelect.name:
        setFilterBy(value);
        break;
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.header}>
        <h3 className={styles.title}>Filter</h3>
        <button className={styles.clear} onClick={handleReset}>
          clear all
        </button>
      </div>
      <div className={styles.option}>
        <h4 className={styles.subtitle}>Sort by</h4>
        <Dropdown
          name={sortSelect.name}
          selected={sortBy}
          setSelected={handleDropdown}
          options={sortSelect.options}
        />
      </div>
      <div className={styles.option}>
        <h4 className={styles.subtitle}>Filter by</h4>
        <Dropdown
          name={filterSelect.name}
          selected={filterBy}
          setSelected={handleDropdown}
          options={filterSelect.options}
        />
      </div>
      {filterBy !== filterByOptions.all && (
        <div className={styles.search}>
          <SearchInput handleSearch={setSearchValue} />
        </div>
      )}
    </div>
  );
};

export default Filter;
