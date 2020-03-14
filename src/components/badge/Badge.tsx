import styled, { css } from 'styled-components';
import { Props, variantToColorsMapping } from './types';

export const Badge = styled.span<Props>(
  ({ variant = 'neutral', theme: { sizing, font } }) => {
    const variantColors =
      variantToColorsMapping[variant] ?? variantToColorsMapping.neutral;

    return css`
      padding: ${sizing.fn(0.25)}px ${sizing.fn(0.5)}px;
      font-size: ${font.variants.feather.size};
      color: ${variantColors.color.hex};
      background: ${variantColors.background.hex};
      border-radius: ${sizing.borderRadius};
      display: inline-flex;
    `;
  }
);
