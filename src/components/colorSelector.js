/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@rmwc/button';
import { GridRow } from '@rmwc/grid';
import { DEFAULT_STYLE, AQUA_STYLE } from '../default_styles/style';

function ColorSelector(props) {
  const { handleClick } = props;
  return (
    <GridRow>
      <Button onClick={() => handleClick(DEFAULT_STYLE)}>Grey-Coral</Button>
      <Button onClick={() => handleClick(AQUA_STYLE)}> Aqua </Button>
    </GridRow>
  );
}

ColorSelector.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ColorSelector;
