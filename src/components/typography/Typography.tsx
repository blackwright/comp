import styled, { css } from 'styled-components';
import { Props } from './types';

export const Typography = styled.span.attrs<Props>(({ testId }) => ({
  'data-testid': testId
}))<Props>(({ variant = 'normal', theme }) => {
  const font = theme.font.variants[variant] ?? theme.font.variants.normal;

  return css`
    font-family: ${font.family};
    font-size: ${font.size};
    font-weight: ${font.weight};
    line-height: ${font.height};
    letter-spacing: ${font.spacing};
    text-transform: ${font.transform};
  `;
});

Typography.defaultProps = {
  testId: 'typography',
  as: 'span',
  variant: 'normal'
};
