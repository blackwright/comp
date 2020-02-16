import styled from 'styled-components';
import { Props } from './types';
import {
  getSizeValue,
  appendIndividualPaddings,
  appendIndividualMargins
} from './utils';

export const Block = styled.div.attrs<Props>(({ testId }) => ({
  'data-testid': testId
}))<Props>(props => {
  let css = '';

  if ('p' in props) {
    css += `padding: ${getSizeValue(props.p)};`;
  } else if ('pX' in props || 'pY' in props) {
    css += `padding: ${getSizeValue(props.pY)} ${getSizeValue(props.pX)};`;
  }

  if ('m' in props) {
    css += `margin: ${getSizeValue(props.m)};`;
  } else if ('mX' in props || 'mY' in props) {
    css += `margin: ${getSizeValue(props.mY)} ${getSizeValue(props.mX)};`;
  }

  css += `
    ${appendIndividualPaddings(props)}
    ${appendIndividualMargins(props)}
  `;

  return css;
});

Block.defaultProps = {
  testId: 'block'
};
