import React, { useState } from 'react';
import styles from './drop-down.module.css';
import DropList from '../drop-list/drop-list';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as RemoveIcon } from './remove.svg';
import { IDopDownProps } from './interface';

export default function DropDown({ label, MenuItems }: IDopDownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.dropDown}>
      <p className={styles.title}>
        {label}
      </p>
      <div className={styles.dropDownTest}>
        <div className={styles.labels}>
          <div className={styles.label}>
            <p className={styles.labelText}>Английский</p>
            <button
              className={styles.labelButton}
              type="button"
              aria-label="удалить фильтр"
            >
              <RemoveIcon
                className={styles.labelIcon}
                width="8px"
                height="8px"
              />
            </button>
          </div>
          <div className={styles.label}>
            <p className={styles.labelText}>Немецкий</p>
            <button
              className={styles.labelButton}
              type="button"
            >
              <RemoveIcon
                className={styles.labelIcon}
                width="8px"
                height="8px"
              />
            </button>
          </div>
        </div>
        <button
          className={styles.dropDownTestButton}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ArrowIcon
            className={styles.buttonIcon}
            width="10px"
            height="5px"
          />
        </button>
      </div>

      {isOpen && (
        <DropList items={MenuItems} />
      )}

    </div>
  );
}
