import styled, { css } from 'styled-components';
import { Box } from '../box';
import { Props } from './types';

export const Card = styled(Box)<Props>(
  ({
    shadow = 'md',
    background = 'white',
    color,
    theme: { colors, shadows, sizing }
  }) => css`
    color: ${color ? colors[color].hex : 'inherit'};
    background: ${colors[background].hex};
    box-shadow: ${shadows[shadow] ?? shadows.md};
    border-radius: ${sizing.borderRadius};
  `
);

Card.defaultProps = {
  testId: 'card',
  shadow: 'md',
  background: 'white'
};
