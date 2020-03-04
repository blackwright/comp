import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { FaInfoCircle } from 'react-icons/fa';
import { Placement } from 'popper.js';
import { Tooltip } from './Tooltip';
import { booleanSelectKnob } from 'utils';

export default {
  title: 'Layout/Tooltip',
  component: Tooltip,
  decorators: [withKnobs]
};

export const Default = () => {
  const isOpen = booleanSelectKnob('isOpen');

  const placementOptions = [
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
  ] as Placement[];
  const placement = select('placement', placementOptions, 'auto');

  return (
    <Tooltip
      isOpen={isOpen}
      placement={placement}
      trigger={
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0)'
          }}
        >
          <FaInfoCircle />
        </div>
      }
    >
      A descriptive tooltip
    </Tooltip>
  );
};
