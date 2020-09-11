/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@rmwc/button';
import { Grid, GridRow } from '@rmwc/grid';
import { DEFAULT_STYLE, DARK_STYLE } from '../default_styles/style';

function ColorSelector(props) {
  const { handleClick } = props;
  return (
    <Grid>
      <GridRow>
        <Button onClick={() => handleClick(DEFAULT_STYLE)}>Grey-Coral</Button>
        <Button onClick={() => handleClick(DARK_STYLE)}>Dark Mode</Button>
      </GridRow>
    </Grid>
  );
}

ColorSelector.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ColorSelector;
