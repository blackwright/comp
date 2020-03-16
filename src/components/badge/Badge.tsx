import styled, { css } from 'styled-components';
import { Props } from './types';

export const Badge = styled.span.attrs<Props>(({ testId }) => ({
  'data-testid': testId
}))<Props>(({ variant = 'neutral', theme: { sizing, font, colors } }) => {
  const variantColors = colors.variants[variant] ?? colors.variants.neutral;

  return css`
    padding: ${sizing.fn(0.25)}px ${sizing.fn(0.5)}px;
    font-size: ${font.variants.feather.size};
    color: ${variantColors.text.hex};
    background: ${variantColors.background.passive.hex};
    border-radius: ${sizing.borderRadius};
    display: inline-flex;
  `;
});

Badge.defaultProps = {
  testId: 'badge',
  variant: 'neutral'
};
