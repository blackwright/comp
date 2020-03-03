import React from 'react';
import styled from 'styled-components';
import { Dialog } from './Dialog';
import { Block } from 'components/block';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Layout/Dialog',
  component: Dialog,
  decorators: [withKnobs]
};

export const Default = () => {
  const isOpen = boolean('isOpen', false);
  const usePortal = boolean('usePortal', true);
  const useBackdrop = boolean('useBackdrop', true);

  return (
    <ColoredBlock pX="xl" pY="xl" alignItems="center" justifyContent="center">
      Non-portal renders inside nearest relatively positioned parent.
      <Dialog isOpen={isOpen} usePortal={usePortal} useBackdrop={useBackdrop}>
        <Block pX="md" pY="md">
          Content
        </Block>
      </Dialog>
    </ColoredBlock>
  );
};

const ColoredBlock = styled(Block)`
  background: gray;
  position: relative;
  max-width: 400px;
`;
