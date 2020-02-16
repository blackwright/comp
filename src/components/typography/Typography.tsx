import styled, { css } from 'styled-components';
import { colors } from 'theme/colors';
import { ColorValues } from 'theme/colors/types';
import { Dictionary } from 'types';
import { Props } from './types';

export const Typography = styled.span.attrs<Props>(({ testId }) => ({
  'data-testid': testId
}))<Props>(({ variant = 'normal', color, theme }) => {
  const font = theme.font.variants[variant];

  let colorCSS = 'inherit';

  if (color) {
    const themeColor = (colors.all as Dictionary<ColorValues>)[color];

    if (themeColor) {
      colorCSS = themeColor.css.hex;
    }
  }

  return css`
    font-family: ${font.family};
    font-size: ${font.size};
    font-weight: ${font.weight};
    line-height: ${font.height};
    letter-spacing: ${font.spacing};
    text-transform: ${font.transform};
    color: ${colorCSS};
  `;
});

Typography.defaultProps = {
  testId: 'typography',
  as: 'span',
  variant: 'normal'
};
