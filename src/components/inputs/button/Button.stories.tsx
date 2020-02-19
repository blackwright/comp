import React from 'react';
import { Button } from './index';

export default {
  title: 'Inputs/Button',
  component: Button
};

const handleClick = () => ({});

export const Default = () => <Button onClick={handleClick}>Button</Button>;

export const Disabled = () => (
  <Button onClick={handleClick} isDisabled={true}>
    Button
  </Button>
);
