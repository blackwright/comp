import React from 'react';
import { Checkbox } from './index';

export default {
  title: 'Input/Checkbox',
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
    <div key={alignment} style={{ marginBottom: '8px' }}>
      <Checkbox alignItems={alignment}>
        <Description title={alignment} />
      </Checkbox>
    </div>
  ));

export const Disabled = () => (
  <Checkbox disabled={true}>
    <Description title="Disabled" />
  </Checkbox>
);
