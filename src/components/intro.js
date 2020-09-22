/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridRow, GridCell } from '@rmwc/grid';
import SocialContainer from '../containers/socialContainer';
import IntroParragraph from './introParragraph';

function Intro(props) {
  const { primary, secondary } = props;
  return (
    <Grid>
      <GridRow className="intro-row">
        <GridCell className="intro" style={primary}>
          <IntroParragraph secondary={secondary} />
        </GridCell>
        <GridCell className="social-icons" style={secondary}>
          <SocialContainer secondary={secondary} />
        </GridCell>
      </GridRow>
    </Grid>
  );
}

Intro.propTypes = {
  primary: PropTypes.object.isRequired,
  secondary: PropTypes.object.isRequired,
};

export default Intro;
