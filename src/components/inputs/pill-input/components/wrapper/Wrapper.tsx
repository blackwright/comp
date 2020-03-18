import styled, { css } from 'styled-components';
import { Input } from 'components/inputs/input';
import { Props } from './types';

export const Wrapper = styled(Input)<Props>(
  ({ isFullWidth, isFocused, disabled, theme: { colors } }) => css`
    display: inline-flex;
    flex-flow: row wrap;
    min-width: ${isFullWidth ? '100%' : '180px'};
    cursor: ${disabled ? 'auto' : 'text'};
    ${isFocused &&
      `border-color: ${colors.variants.action.background.active.hex}`};
  `
);
