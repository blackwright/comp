import styled from 'styled-components';
import { Props } from './types';
import {
  getSizeValue,
  appendIndividualPaddings,
  appendIndividualMargins
} from './utils';

export const Box = styled.div.attrs<Props>(({ testId }) => ({
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
    if (spacing.px != null) {
      const value = getSizeValue(spacing.px);
      css += `padding-left: ${value};`;
      css += `padding-right: ${value};`;
    }
    if (spacing.py != null) {
      const value = getSizeValue(spacing.py);
      css += `padding-top: ${value};`;
      css += `padding-bottom: ${value};`;
    }

    if (spacing.m != null) {
      css += `margin: ${getSizeValue(spacing.m)};`;
    }
    if (spacing.mx != null) {
      const value = getSizeValue(spacing.mx);
      css += `margin-left: ${value};`;
      css += `margin-right: ${value};`;
    }
    if (spacing.my != null) {
      const value = getSizeValue(spacing.my);
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

Box.defaultProps = {
  testId: 'box',
  isInline: false,
  flex: '1 1 0',
  flow: 'row nowrap',
  alignItems: 'stretch',
  justifyContent: 'flex-start'
};
