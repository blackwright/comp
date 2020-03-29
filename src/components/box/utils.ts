import {
  Size,
  SpacingProps,
  sizeStringToNumberValue,
  MappedSize
} from './types';

export function getSizeValue(size?: Size): string {
  if (size == null) {
    return '0';
  }

  if (typeof size === 'number') {
    return size + 'px';
  }

  const mappedSize: number | undefined =
    sizeStringToNumberValue[size as MappedSize];

  if (mappedSize != null) {
    return mappedSize + 'px';
  }

  return size;
}

export function appendIndividualPaddings(props: SpacingProps) {
  let css = '';

  if (props.pt) {
    css += `padding-top: ${getSizeValue(props.pt)};`;
  }
  if (props.pr) {
    css += `padding-right: ${getSizeValue(props.pr)};`;
  }
  if (props.pb) {
    css += `padding-bottom: ${getSizeValue(props.pb)};`;
  }
  if (props.pl) {
    css += `padding-left: ${getSizeValue(props.pl)};`;
  }

  return css;
}

export function appendIndividualMargins(props: SpacingProps) {
  let css = '';

  if (props.mt) {
    css += `margin-top: ${getSizeValue(props.mt)};`;
  }
  if (props.mr) {
    css += `margin-right: ${getSizeValue(props.mr)};`;
  }
  if (props.mb) {
    css += `margin-bottom: ${getSizeValue(props.mb)};`;
  }
  if (props.ml) {
    css += `margin-left: ${getSizeValue(props.ml)};`;
  }

  return css;
}
