import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Typography } from '../../components';
import { colors } from './index';
import { isBright } from './utils';

export default {
  title: 'Design System/Colors'
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
    ] as Array<keyof typeof colors.byHue>).map(colorGroup => (
      <SwatchContainer key={colorGroup}>
        {Object.entries(colors.byHue[colorGroup]).map(
          ([name, { value, hex, rgb }]) => {
            const textColor = isBright(value) ? 'dark4' : 'light1';

            return (
              <ColorSwatch
                key={hex}
                background={hex}
                p="sm"
                flow="column nowrap"
              >
                <Typography as="div" variant="header5" color={textColor}>
                  {name}
                </Typography>
                <Box mt="xs">
                  <Typography as="div" variant="small" color={textColor}>
                    <div>{hex}</div>
                    <div>{rgb}</div>
                  </Typography>
                </Box>
              </ColorSwatch>
            );
          }
        )}
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

const ColorSwatch = styled(Box)<{ background: string }>(
  ({ background, theme }) => css`
    background: ${background};
    height: 100px;
    overflow: hidden;
  `
);
