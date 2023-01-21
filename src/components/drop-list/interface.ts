import { ChangeEvent } from 'react';
import { IDropItem } from '../../interface';

export interface IDropListProps {
  items: IDropItem[];
  currentItems: string[];
  onChangeItem: (e: ChangeEvent<HTMLInputElement>) => void;
}
