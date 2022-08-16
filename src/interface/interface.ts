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
  price: number | string;
  handleChecked: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface ISearch {
  OnChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  checked: string[];
}

export interface IICons {
  id?: any;
  onClick?: (args: any) => void;
}

export interface IChart {
  chartType: any;
  width?: string;
  height?: string;
  data: any;
  options: any;
  className?: string;
}
