import * as React from 'react';
import styled from 'styled-components';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Placement } from 'popper.js';
import { Dropdown } from './dropdown';
import { Button } from 'components/inputs/button';
import { DropdownItem } from './dropdown-item';
import { booleanSelectKnob } from 'utils';

export default {
  title: 'Layout/Dropdown',
  component: Dropdown,
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
  const placement = select('placement', placementOptions, 'bottom-start');

  const matchTriggerWidth = boolean('matchTriggerWidth', true);

  const disabled = boolean('disabled', false);

  const listItems = new Array(5).fill('Item');

  return (
    <Dropdown
      trigger={<CenteredButton>Toggle dropdown</CenteredButton>}
      isOpen={isOpen}
      placement={placement}
      matchTriggerWidth={matchTriggerWidth}
      disabled={disabled}
    >
      {listItems.map((item, i) => (
        <DropdownItem key={i} onClick={() => alert(`Dropdown item ${i + 1}`)}>
          {item}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

const CenteredButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
