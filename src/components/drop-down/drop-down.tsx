import React, {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import styles from './drop-down.module.css';
import DropList from '../drop-list/drop-list';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as RemoveIcon } from './remove.svg';
import { IDopDownProps } from './interface';
import { IDropItem } from '../../interface';

export default function DropDown({
  label,
  MenuItems,
  MultiSelect,
}: IDopDownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<IDropItem[]>(MenuItems);
  const [currentItems, setCurrentItems] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleChangeItem = (e: ChangeEvent<HTMLInputElement>): void => {
    const { target } = e;

    if (!MultiSelect) {
      setCurrentItems([target.value]);
      return;
    }

    if (currentItems.includes(target.value)) {
      const newItems = currentItems.filter((item) => item !== target.value);

      setCurrentItems(newItems);
    } else {
      setCurrentItems([...currentItems, target.value]);
    }
  };

  const removeItem = (currentItem: string): void => {
    setCurrentItems(currentItems.filter((item) => item !== currentItem));
  };

  const handleChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(target.value);
    setItems(MenuItems.filter((item) => (
      item.label.toLowerCase().includes(target.value.toLowerCase())
    )));
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
      <div className={styles.select}>
        <div className={styles.selectLabels}>
          {currentItems.map((item) => (
            <div className={styles.selectLabel} key={item}>
              <p className={styles.selectLabelText}>{item}</p>
              <button
                className={styles.selectLabelButton}
                type="button"
                aria-label="удалить фильтр"
                onClick={() => removeItem(item)}
              >
                <RemoveIcon
                  className={styles.selectLabelIcon}
                  width="8px"
                  height="8px"
                />
              </button>
            </div>
          ))}
        </div>
        <button
          className={styles.selectButton}
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
          multiSelect={MultiSelect}
          items={items}
          currentItems={currentItems}
          searchValue={searchValue}
          onChangeItem={handleChangeItem}
          onChangeSearch={handleChangeSearch}
        />
      )}

    </div>
  );
}
