import React from 'react';
import styled from 'styled-components';
import { Dialog } from './Dialog';
import { Box } from 'components/box';
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
    <ColoredBox px="xl" py="xl" alignItems="center" justifyContent="center">
      Non-portal renders inside nearest relatively positioned parent.
      <Dialog isOpen={isOpen} usePortal={usePortal} useBackdrop={useBackdrop}>
        <Box px="md" py="md">
          Content
        </Box>
      </Dialog>
    </ColoredBox>
  );
};

const ColoredBox = styled(Box)`
  background: gray;
  position: relative;
  max-width: 400px;
`;
