/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@rmwc/button';
import { GridRow } from '@rmwc/grid';
import { DEFAULT_STYLE, AQUA_STYLE } from '../default_styles/style';

function ColorSelector(props) {
  const { handleClick, style } = props;
  const contrastStyle = {
    color: style.color,
    backgroundColor: style.backgroundContrast,
  };

  return (
    <GridRow className="color-selector">
      <Button style={contrastStyle} onClick={() => handleClick(DEFAULT_STYLE)}>
        Grey-Coral
      </Button>
      <Button style={contrastStyle} onClick={() => handleClick(AQUA_STYLE)}>
        Aqua
      </Button>
    </GridRow>
  );
}

ColorSelector.propTypes = {
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default ColorSelector;
