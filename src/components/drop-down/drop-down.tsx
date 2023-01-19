import React, { useState } from 'react';
import styles from './drop-down.module.css';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import DropList from '../drop-list/drop-list';

export default function DropDown(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          onClick={() => setIsOpen(true)}
        >
          <ArrowIcon
            className={styles.buttonIcon}
            width="10px"
            height="5px"
          />
        </button>
      </div>

      {isOpen && (
        <DropList />
      )}

    </div>
  );
}
