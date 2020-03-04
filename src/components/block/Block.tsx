import styled from 'styled-components';
import { Props } from './types';
import {
  getSizeValue,
  appendIndividualPaddings,
  appendIndividualMargins
} from './utils';

export const Block = styled.div.attrs<Props>(({ testId }) => ({
  'data-testid': testId
}))<Props>(
  ({ isInline, flex, flow, alignItems, justifyContent, ...spacing }) => {
    let css = `
      display: ${isInline ? 'inline-flex' : 'flex'};
      flex: ${flex};
      flex-flow: ${flow};
      align-items: ${alignItems};
      justify-content: ${justifyContent};
  `;

    if (spacing.p != null) {
      css += `padding: ${getSizeValue(spacing.p)};`;
    }
    if (spacing.pX != null) {
      const value = getSizeValue(spacing.pX);
      css += `padding-left: ${value};`;
      css += `padding-right: ${value};`;
    }
    if (spacing.pY != null) {
      const value = getSizeValue(spacing.pY);
      css += `padding-top: ${value};`;
      css += `padding-bottom: ${value};`;
    }

    if (spacing.m != null) {
      css += `margin: ${getSizeValue(spacing.m)};`;
    }
    if (spacing.mX != null) {
      const value = getSizeValue(spacing.mX);
      css += `margin-left: ${value};`;
      css += `margin-right: ${value};`;
    }
    if (spacing.mY != null) {
      const value = getSizeValue(spacing.mY);
      css += `margin-top: ${value};`;
      css += `margin-bottom: ${value};`;
    }

    css += `
    ${appendIndividualPaddings(spacing)}
    ${appendIndividualMargins(spacing)}
  `;

    return css;
  }
);

Block.defaultProps = {
  testId: 'block',
  isInline: false,
  flex: '1 1 0',
  flow: 'row nowrap',
  alignItems: 'stretch',
  justifyContent: 'flex-start'
};
