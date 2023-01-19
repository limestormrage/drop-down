import React from 'react';
import styles from './drop-list.module.css';
import { ReactComponent as SearchIcon } from './search.svg';

export default function DropList(): JSX.Element {
  return (
    <div className={styles.dropList}>
      <div className={styles.search}>
        <SearchIcon className={styles.searchIcon} width="14px" height="14px" />
        <input className={styles.searchInput} type="search" placeholder="Поиск" />
      </div>
      <div className={styles.itemList}>
        <div className={styles.item}>
          <input className={styles.itemInput} type="checkbox" id="russian" />
          <label className={styles.itemLabel} htmlFor="russian">Русский</label>
        </div>
        <div className={styles.item}>
          <input className={styles.itemInput} type="checkbox" id="english" />
          <label className={styles.itemLabel} htmlFor="english">Английский</label>
        </div>
        <div className={styles.item}>
          <input className={styles.itemInput} type="checkbox" id="spanish" />
          <label className={styles.itemLabel} htmlFor="spanish">Испанский</label>
        </div>
        <div className={styles.item}>
          <input className={styles.itemInput} type="checkbox" id="german" />
          <label className={styles.itemLabel} htmlFor="german">Немецкий</label>
        </div>
        <div className={styles.item}>
          <input className={styles.itemInput} type="checkbox" id="italian" />
          <label className={styles.itemLabel} htmlFor="italian">Итальянский</label>
        </div>
        <div className={styles.item}>
          <input className={styles.itemInput} type="checkbox" id="poland" />
          <label className={styles.itemLabel} htmlFor="poland">Польский</label>
        </div>
      </div>
    </div>
  );
}
