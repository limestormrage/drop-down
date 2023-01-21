import { IDropItem } from '../../interface';

export interface IDopDownProps {
  dropDownLabel: string;
  menuItems: IDropItem[];
  isMultiSelect: boolean;
  isShowIcons: boolean;
}
