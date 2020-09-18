/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@rmwc/button';
import { GridRow } from '@rmwc/grid';
import { DEFAULT_STYLE, AQUA_STYLE } from '../default_styles/style';

function ColorSelector(props) {
  const { handleClick, style } = props;

  const control = style.name === 'default'
    ? { nextStyle: AQUA_STYLE, text: 'Switch to Aqua' }
    : { nextStyle: DEFAULT_STYLE, text: 'Switch to Coral' };

  return (
    <GridRow className="color-selector">
      <Button style={style} onClick={() => handleClick(control.nextStyle)}>
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
