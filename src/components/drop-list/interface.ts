import { ChangeEvent } from 'react';
import { IDropItem } from '../../interface';

export interface IDropListProps {
  items: IDropItem[];
  multiSelect: boolean;
  currentItems: string[];
  searchValue: string;
  onChangeItem: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSearch: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}
