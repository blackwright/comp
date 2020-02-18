type Name =
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'header5'
  | 'subtitle1'
  | 'subtitle2'
  | 'paragraph'
  | 'small'
  | 'smallCaps'
  | 'feather'
  | 'normal';

type Value = {
  size: string;
  height: string;
  family: string;
  weight: number;
  sizing: string;
  transform: string;
};

export type Variants = Record<Name, Value>;
