import styled from 'styled-components';
import { Props } from './types';
import {
  getSizeValue,
  appendIndividualPaddings,
  appendIndividualMargins
} from './utils';

export const Block = styled.div.attrs<Props>(({ testId }) => ({
  'data-testid': testId
}))<Props>(({ flex, flow, alignItems, justifyContent, ...spacing }) => {
  let css = `
    display: flex;
    flex: ${flex};
    flex-flow: ${flow};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `;

  if ('p' in spacing) {
    css += `padding: ${getSizeValue(spacing.p)};`;
  } else if ('pX' in spacing || 'pY' in spacing) {
    css += `padding: ${getSizeValue(spacing.pY)} ${getSizeValue(spacing.pX)};`;
  }

  if ('m' in spacing) {
    css += `margin: ${getSizeValue(spacing.m)};`;
  } else if ('mX' in spacing || 'mY' in spacing) {
    css += `margin: ${getSizeValue(spacing.mY)} ${getSizeValue(spacing.mX)};`;
  }

  css += `
    ${appendIndividualPaddings(spacing)}
    ${appendIndividualMargins(spacing)}
  `;

  return css;
});

Block.defaultProps = {
  testId: 'block',
  flex: '1 1 0',
  flow: 'row nowrap',
  alignItems: 'stretch',
  justifyContent: 'flex-start'
};
