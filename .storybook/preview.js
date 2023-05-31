/** @type { import('@storybook/react').Preview } */

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/storiesTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.black,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
