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

export interface ISymbol {
  symbol: string;
}

export interface ICheckbox {
  className?: string;
  onChange?: (arg: string[]) => any;
  value: string[];
}
