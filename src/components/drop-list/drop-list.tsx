import React from 'react';
import styles from './drop-list.module.css';
import { IDropListProps } from './interface';
import { ReactComponent as SearchIcon } from './search.svg';

export default function DropList({
  multiSelect,
  items,
  currentItems,
  searchValue,
  onChangeItem,
  onChangeSearch,
}: IDropListProps): JSX.Element {
  const itemType = multiSelect ? 'checkbox' : 'radio';

  return (
    <div className={styles.dropList}>
      <div className={styles.search}>
        <SearchIcon className={styles.searchIcon} width="14px" height="14px" />
        <div className={styles.searchInputWrapper}>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Поиск"
            onChange={onChangeSearch}
            value={searchValue}
          />
        </div>
      </div>
      <div className={styles.itemList}>
        {items.map(({ id, label }) => (
          <div className={styles.item} key={id}>
            <input
              className={styles.itemInput}
              type={itemType}
              id={id}
              name="test"
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
