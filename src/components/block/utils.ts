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

  if (props.pTop) {
    css += `padding-top: ${getSizeValue(props.pTop)};`;
  }
  if (props.pRight) {
    css += `padding-right: ${getSizeValue(props.pRight)};`;
  }
  if (props.pBottom) {
    css += `padding-bottom: ${getSizeValue(props.pBottom)};`;
  }
  if (props.pLeft) {
    css += `padding-left: ${getSizeValue(props.pLeft)};`;
  }

  return css;
}

export function appendIndividualMargins(props: SpacingProps) {
  let css = '';

  if (props.mTop) {
    css += `margin-top: ${getSizeValue(props.mTop)};`;
  }
  if (props.mRight) {
    css += `margin-right: ${getSizeValue(props.mRight)};`;
  }
  if (props.mBottom) {
    css += `margin-bottom: ${getSizeValue(props.mBottom)};`;
  }
  if (props.mLeft) {
    css += `margin-left: ${getSizeValue(props.mLeft)};`;
  }

  return css;
}
