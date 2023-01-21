import React, { useState, ChangeEvent } from 'react';
import styles from './drop-list.module.css';
import { IDropListProps } from './interface';
import { ReactComponent as SearchIcon } from './search.svg';

export default function DropList({
  items,
  currentItems,
  onChangeItem,
}: IDropListProps): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(target.value);
  };
  return (
    <div className={styles.dropList}>
      <div className={styles.search}>
        <SearchIcon className={styles.searchIcon} width="14px" height="14px" />
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Поиск"
          onChange={handleChangeSearch}
          value={searchValue}
        />
      </div>
      <div className={styles.itemList}>
        {items.map(({ id, label }) => (
          <div className={styles.item} key={id}>
            <input
              className={styles.itemInput}
              type="checkbox"
              id={id}
              value={label}
              onChange={onChangeItem}
              checked={currentItems.includes(label)}
            />
            <label
              className={styles.itemLabel}
              htmlFor={id}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
