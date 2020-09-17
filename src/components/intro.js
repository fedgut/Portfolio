/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridRow, GridCell } from '@rmwc/grid';
import SocialContainer from '../containers/socialContainer';

function Intro(props) {
  const { primary, secondary } = props;
  return (
    <Grid>
      <GridRow className="intro-row">
        <GridCell
          className="intro"
          style={primary}
          phone={6}
          tablet={4}
          desktop={8}
        >
          <p>
            Hello!
            <br />
            My name is&nbsp;
            <br />
            <span
              style={{
                color: secondary.background,
                backgroundColor: secondary.color,
              }}
            >
              Eduardo Gutierrez
            </span>
            <br />
            I&apos;m a Full-stack developer
          </p>
        </GridCell>
        <GridCell
          className="social-icons"
          style={secondary}
          phone={6}
          tablet={4}
          desktop={4}
        >
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
