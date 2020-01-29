import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

if (process.env.NODE_ENV !== 'test') {
  addDecorator(storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  ));
}

addParameters({
  options: {
    // Stories are separated into categories at root level
    showRoots: true,
    // Sort stories in alphabetical order
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
