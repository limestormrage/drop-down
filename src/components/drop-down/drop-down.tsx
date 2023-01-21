import React, {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import styles from './drop-down.module.css';
import DropList from '../drop-list/drop-list';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as RemoveIcon } from './remove.svg';
import { IDopDownProps } from './interface';

export default function DropDown({ label, MenuItems }: IDopDownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentItems, setCurrentItems] = useState<string[]>([]);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleChangeItem = (e: ChangeEvent<HTMLInputElement>): void => {
    const { target } = e;

    if (currentItems.includes(target.value)) {
      const newItems = currentItems.filter((item) => item !== target.value);

      setCurrentItems(newItems);
    } else {
      setCurrentItems([...currentItems, target.value]);
    }
  };

  // добавляет обработчик для закрытия при нажатии вне компонента
  useEffect(() => {
    const handleClick = (e: Event): void => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      if (!dropDownRef.current?.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return (() => document.removeEventListener('click', handleClick));
  }, [isOpen]);

  return (
    <div className={styles.dropDown} ref={dropDownRef}>
      <p className={styles.title}>
        {label}
      </p>
      <div className={styles.dropDownTest}>
        <div className={styles.labels}>
          {currentItems.map((item) => (
            <div className={styles.label} key={item}>
              <p className={styles.labelText}>{item}</p>
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
          ))}
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
        <DropList
          items={MenuItems}
          currentItems={currentItems}
          onChangeItem={handleChangeItem}
        />
      )}

    </div>
  );
}
