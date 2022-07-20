import { ReactNode } from 'react';

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
}

export interface ICheckbox {
  className?: string;
  onChange?: (arg: string[]) => any;
  value: string[];
}
