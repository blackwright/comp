import React from 'react';
import styled, { css } from 'styled-components';
import { Block, Typography } from '../../components';
import { colors, Brightness } from './index';
import { getBrightness } from './utils';
import { capitalize } from '../../utils';

export default {
  title: 'Colors'
};

export const Colors = () => (
  <>
    {([
      'blues',
      'teals',
      'greens',
      'limes',
      'yellows',
      'oranges',
      'reds',
      'pinks',
      'purples',
      'monochrome'
    ] as Array<keyof typeof colors>).map(colorGroup => (
      <SwatchContainer>
        {Object.entries(colors[colorGroup]).map(([name, { value, css }]) => {
          const textColor =
            getBrightness(value) === Brightness.LIGHT ? 'black' : 'white';

          return (
            <ColorSwatch background={css.hex}>
              <Typography as="div" variant="header5" color={textColor}>
                {name}
              </Typography>
              <Block mTop="xs">
                <Typography as="div" variant="small" color={textColor}>
                  <div>{css.hex}</div>
                  <div>{css.rgb}</div>
                </Typography>
              </Block>
            </ColorSwatch>
          );
        })}
      </SwatchContainer>
    ))}
  </>
);

const SwatchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const ColorSwatch = styled.div<{ background: string }>(
  ({ background, theme }) => css`
    background: ${background};
    padding: 0 ${theme.spacing(2)}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    overflow: hidden;
  `
);
