/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
  const { terciary } = props;
  return (
    <div style={terciary}>
      massa ultricies morbi tristique senectus et netus et malesuada fames ac
      turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies
      morbi tristique senectus et netus et malesuada fames ac turpis egestas sed
      tempus urna et pharetra pharetra massa massa ultricies
    </div>
  );
};

About.propTypes = {
  terciary: PropTypes.object.isRequired,
};

export default About;
