import { ReactNode } from 'react';

export interface IHeader {
  className?: string;
  content: string;
}

export interface ITable {
  children: ReactNode;
  clasName?: string;
  // symbol: string;
  // name: string;
  // price?: number;
}

export interface IContainer {
  children: ReactNode;
  clasName?: string;
}
