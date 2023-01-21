import { FunctionComponent, SVGProps } from 'react';

export interface IDropItem {
  label: string;
  id: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}
