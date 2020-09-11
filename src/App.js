import React from 'react';
import '@rmwc/theme/styles';
import '@rmwc/grid/styles';
import './App.css';

import { Theme, ThemeProvider } from '@rmwc/theme';
import { Grid, GridRow, GridCell } from '@rmwc/grid';

function App() {
  return (
    <div className="App">
      <ThemeProvider
        options={{
          primary: 'white',
          secondary: 'white',
          primaryBg: 'black',
          secondaryBg: '#b49bac',
        }}
      >
        <Grid>
          <GridRow>
            <GridCell span={8}>a</GridCell>
            <GridCell span={4}>b</GridCell>
          </GridRow>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
