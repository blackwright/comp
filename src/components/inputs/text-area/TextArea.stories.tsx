import React from 'react';
import { TextArea } from './TextArea';

export default {
  title: 'Inputs/TextArea',
  component: TextArea
};

export const Default = () => <TextArea placeholder="Text area" />;

export const FitContents = () => (
  <TextArea placeholder="Text area" fitContents={true} />
);

export const FullWidth = () => (
  <div style={{ width: '300px', padding: '8px', background: 'pink' }}>
    <TextArea placeholder="Full width" isFullWidth={true} />
  </div>
);

export const Disabled = () => (
  <TextArea placeholder="Disabled" disabled={true} />
);
