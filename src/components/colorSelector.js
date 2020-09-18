/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@rmwc/button';
import { GridRow } from '@rmwc/grid';
import { DEFAULT_STYLE, CORAL_STYLE } from '../default_styles/style';

function ColorSelector(props) {
  const { handleClick, style } = props;
  return (
    <GridRow className="color-selector">
      <Button tag="div" style={{ color: style.color }}>
        Theme:
      </Button>
      <Button style={style} onClick={() => handleClick(DEFAULT_STYLE)}>
        Grey-Coral
      </Button>
      <Button style={style} onClick={() => handleClick(CORAL_STYLE)}>
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
