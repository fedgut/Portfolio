/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridRow, GridCell } from '@rmwc/grid';

function Intro(props) {
  const { primary, secondary } = props;
  return (
    <Grid>
      <GridRow>
        <GridCell style={primary} phone={6} tablet={4} desktop={7}>
          morbi tristique senectus et netus et malesuada fames ac turpis egestas
          sed tempus urna et pharetra pharetra massa massa ultricies
        </GridCell>
        <GridCell style={secondary} phone={6} tablet={4} desktop={5}>
          duis ultricies lacus sed turpis morbi tristique senectus et netus et
          malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra
          massa massa ultricies morbi tristique senectus et netus et malesuada
          fames ac turpis egestas sed tempus urna et pharetra pharetra massa
          massa ultricies morbi tristique senectus et netus et malesuada fames
          ac turpis egestas sed tempus urna et pharetra pharetra massa massa
          ultricies morbi tristique senectus et netus et malesuada fames ac
          turpis egestas sed tempus urna et pharetra pharetra massa massa
          ultricies morbi tristique senectus et netus et malesuada fames ac
          turpis egestas sed tempus urna et pharetra pharetra massa massa
          ultricies morbi tristique senectus et netus et malesuada fames ac
          turpis egestas sed tempus urna et pharetra pharetra massa massa
          ultricies
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
