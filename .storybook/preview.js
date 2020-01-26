import { addParameters } from '@storybook/react';

addParameters({
  options: {
    showRoots: true,
    storySort: (a, b) => {
      if (a[1].kind < b[1].kind) {
        return -1;
      }
      if (a[1].kind > b[1].kind) {
        return 1;
      }
      return 0;
    }
  }
});
