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
    backgroundColor: style.colorContrast,
  };

  const control =
    style.name === 'default'
      ? { switchTo: AQUA_STYLE, text: 'Switch to Aqua' }
      : { switchTo: DEFAULT_STYLE, text: 'Switch to Coral' };

  return (
    <GridRow className="color-selector">
      <Button style={contrastStyle} onClick={() => handleClick(control.switchTo)}>
        {control.text}
      </Button>
    </GridRow>
  );
}

ColorSelector.propTypes = {
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default ColorSelector;
