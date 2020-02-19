import React from 'react';
import { Checkbox } from './index';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox
};

const Description = ({ title }: { title: string }) => (
  <>
    <span>{title}</span>
    <small>Some descriptive text explaining what this checkbox does</small>
  </>
);

export const Default = () => (
  <Checkbox>
    <Description title="Description" />
  </Checkbox>
);

export const Alignment = () =>
  ['flex-start', 'center', 'flex-end'].map(alignment => (
    <Checkbox key={alignment} alignItems={alignment}>
      <Description title={alignment} />
    </Checkbox>
  ));

export const Disabled = () => (
  <Checkbox disabled={true}>
    <Description title="Disabled" />
  </Checkbox>
);
