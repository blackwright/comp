type Name =
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'header5'
  | 'paragraph'
  | 'normal'
  | 'subtitle'
  | 'heavyCaps'
  | 'smallCaps'
  | 'small'
  | 'feather';

type Value = {
  size: string;
  height: string;
  family: string;
  weight: number;
  spacing: string;
  transform: string;
};

export type Variants = Record<Name, Value>;
