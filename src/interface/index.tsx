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
