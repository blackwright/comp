import styled, { css } from 'styled-components';
import { Block } from '../block';
import { Props } from './types';

export const Card = styled(Block)<Props>(
  ({ shadow = 'md', color = 'white', theme: { colors, shadows } }) => css`
    background: ${colors[color].hex};
    box-shadow: ${shadows[shadow]};
  `
);

Card.defaultProps = {
  testId: 'card',
  shadow: 'md',
  color: 'white'
};
