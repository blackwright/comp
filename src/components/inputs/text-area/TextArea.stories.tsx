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
FitContents.story = {
  name: 'Fit contents'
};

export const Disabled = () => (
  <TextArea placeholder="Text area" disabled={true} />
);
