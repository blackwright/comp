import * as React from 'react';
import { Dropdown } from './dropdown';
import { Button } from 'components/inputs/button';
import { DropdownItem } from './dropdown-item';

export default {
  title: 'Util/Dropdown',
  component: Dropdown
};

export const Default = () => (
  <Dropdown trigger={<Button>Toggle dropdown</Button>}>
    Renders a dropdown from any component
  </Dropdown>
);

const listItems = new Array(5).fill('Dropdown item');

export const List = () => (
  <Dropdown trigger={<Button>Toggle dropdown</Button>}>
    {listItems.map((item, i) => (
      <DropdownItem key={i} onClick={() => alert(`Dropdown item ${i + 1}`)}>
        {item}
      </DropdownItem>
    ))}
  </Dropdown>
);
