import React, {
  ChangeEvent, useState,
} from 'react';
import styles from './drop-down.module.css';
import DropList from '../drop-list/drop-list';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as RemoveIcon } from './remove.svg';
import { IDopDownProps } from './interface';
import { IDropItem } from '../../interface';
import { useToggleList } from './hook/useToggleList';

export default function DropDown({
  dropDownLabel,
  menuItems,
  isMultiSelect,
  isShowIcons,
}: IDopDownProps): JSX.Element {
  const [items, setItems] = useState<IDropItem[]>(menuItems);
  const [currentItems, setCurrentItems] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const { containerRef, isOpenList, setIsOpenList } = useToggleList();

  const handleChangeItem = (e: ChangeEvent<HTMLInputElement>): void => {
    const { target } = e;

    if (!isMultiSelect) {
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
    setItems(menuItems.filter((item) => (
      item.label.toLowerCase().includes(target.value.toLowerCase())
    )));
  };

  return (
    <div className={styles.dropDown} ref={containerRef}>
      <p className={styles.title}>
        {dropDownLabel}
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
          onClick={() => setIsOpenList(!isOpenList)}
        >
          <ArrowIcon
            className={`${styles.buttonIcon} ${isOpenList ? styles.buttonIconOpen : ''}`}
            width="10px"
            height="5px"
          />
        </button>
      </div>

      {isOpenList && (
        <DropList
          multiSelect={isMultiSelect}
          isShowIcons={isShowIcons}
          items={items}
          currentItems={currentItems}
          dropDownLabel={dropDownLabel}
          searchValue={searchValue}
          onChangeItem={handleChangeItem}
          onChangeSearch={handleChangeSearch}
        />
      )}

    </div>
  );
}
