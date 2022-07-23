import { ChangeEventHandler, ReactNode } from 'react';

export interface IHeader {
  className?: string;
  content: string;
}

export interface IContainer {
  children: ReactNode;
  clasName?: string;
}

export interface ITable {
  children: ReactNode;
  clasName?: string;
}

export interface ICompany {
  symbol: string;
  name: string;
  price: number;
  handleChecked: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface ISearch {
  handleFilter: ChangeEventHandler<HTMLInputElement> | undefined;
  wordEntered: string;
  checked: string[];
}

export interface IICons {
  id?: any;
  onClick?: (args: any) => void;
}
