import React from 'react';
import styles from './drop-down.module.css';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import DropList from '../drop-list/drop-list';

export default function DropDown(): JSX.Element {
  return (
    <div className={styles.dropDown}>
      <p className={styles.title}>Язык</p>
      <div className={styles.dropDownTest}>
        <div className={styles.labels}>
          <div className={styles.label}>
            <p className={styles.labelText}>Английский</p>
            <button
              className={styles.labelButton}
              type="button"
            >
              x
            </button>
          </div>
          <div className={styles.label}>
            <p className={styles.labelText}>Немецкий</p>
            <button
              className={styles.labelButton}
              type="button"
            >
              x
            </button>
          </div>
        </div>
        <button
          className={styles.dropDownTestButton}
          type="button"
        >
          <ArrowIcon width="10px" height="5px" className={styles.buttonIcon} />
        </button>
      </div>
      <DropList />
    </div>
  );
}
