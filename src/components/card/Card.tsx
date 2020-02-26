import styled, { css } from 'styled-components';
import { Block } from '../block';
import { Props } from './types';

export const Card = styled(Block)<Props>(
  ({
    shadow = 'md',
    background = 'white',
    color,
    theme: { colors, shadows, sizing }
  }) => css`
    color: ${color ? colors[color].hex : 'inherit'};
    background: ${colors[background].hex};
    box-shadow: ${shadows[shadow]};
    border-radius: ${sizing.borderRadius};
  `
);

Card.defaultProps = {
  testId: 'card',
  shadow: 'md',
  background: 'white'
};
