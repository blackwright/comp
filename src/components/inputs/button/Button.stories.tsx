import React from 'react';
import { Button } from './index';

export default {
  title: 'Inputs/Button',
  component: Button
};

export const Default = () => <Button>Button</Button>;

export const Disabled = () => <Button disabled={true}>Button</Button>;
