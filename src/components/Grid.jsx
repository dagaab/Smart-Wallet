import React from 'react';
import { Grommet, Grid, Box, grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import Categories from './Categories';
import Balance from './Balance';
import History from './History';
import Recent from './Recent';

const theme = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 3000,
      },
    },
  },
  grid: {
    extend: ({ theme }) => `
      @media (max-width: ${theme.global.breakpoints.small.value}px) {
        grid-template-areas:
          "balance"
          "categories"
          "recent"
          "history";
        grid-template-rows: auto;
        grid-template-columns: auto;
      }

      @media (min-width: ${theme.global.breakpoints.small.value}px) and (max-width: ${theme.global.breakpoints.medium.value}px) {
        grid-template-areas:
          "balance categories recent"
          "history history history";
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr;
      }

      @media (min-width: ${theme.global.breakpoints.medium.value}px) {
        grid-template-areas:
          "balance categories recent"
          "history history history";
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr;
      }
    `,
  },
});

const GridContainer = () => (
  <Grommet theme={theme}>
    <Grid
      rows={['xsmall', 'medium']}
      columns={['1/4', '1/2', '1/4']}
      gap="xsmall"
      areas={[
        { name: 'balance', start: [0, 0], end: [0, 0] },
        { name: 'categories', start: [1, 0], end: [1, 0] },
        { name: 'recent', start: [2, 0], end: [2, 0] },
        { name: 'history', start: [0, 1], end: [2, 1] },
      ]}
    >
      <Balance gridArea="balance" background="light-5" />
      <Categories gridArea="categories" background="light-2" />
      <Recent gridArea="recent" background="light-2" />
      <History gridArea="history" background="light-3" />
    </Grid>
  </Grommet>
);

export default GridContainer;