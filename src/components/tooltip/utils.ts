import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Content, Arrow } from './components';

// TODO: take color as prop

export const PlacementContainer = styled(motion.div)(
  ({ theme: { sizing, colors } }) => {
    const arrowWidth = sizing.fn(0.5);

    return css`
      position: absolute;

      &[data-placement^='top'] {
        ${Content} {
          margin-bottom: ${arrowWidth}px;
        }

        ${Arrow} {
          border-width: ${arrowWidth}px ${arrowWidth}px 0;
          border-top-color: ${colors.background.dark1.hex};
          bottom: 0;
          margin-top: 0;
          margin-bottom: 0;
        }
      }

      &[data-placement^='right'] {
        ${Content} {
          margin-left: ${arrowWidth}px;
        }

        ${Arrow} {
          left: 0;
          border-width: ${arrowWidth}px ${arrowWidth}px ${arrowWidth}px 0;
          border-right-color: ${colors.background.dark1.hex};
          margin-left: 0;
          margin-right: 0;
        }
      }

      &[data-placement^='bottom'] {
        ${Content} {
          margin-top: ${arrowWidth}px;
        }

        ${Arrow} {
          border-width: 0 ${arrowWidth}px ${arrowWidth}px;
          border-bottom-color: ${colors.background.dark1.hex};
          top: 0;
          margin-top: 0;
          margin-bottom: 0;
        }
      }

      &[data-placement^='left'] {
        ${Content} {
          margin-right: ${arrowWidth}px;
        }

        ${Arrow} {
          margin-top: -${arrowWidth}px;
          border-width: ${arrowWidth}px 0 ${arrowWidth}px ${arrowWidth}px;
          border-left-color: ${colors.background.dark1.hex};
          right: 0;
          margin-left: 0;
          margin-right: 0;
        }
      }
    `;
  }
);
