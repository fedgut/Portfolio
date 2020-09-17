/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
  const { tertiary } = props;
  return (
    <div className="about-wrapper" style={tertiary}>
      <div className="about">
        <div className="about-section1">
          I am an ever-curious person, always looking to learn, grow, and
          explore.
          <br />
          <br />
          Among my tech-stack is React, Redux, Ruby, Ruby on Rails, JavaScript,
          and SQL. I embrace code standards and testing as best practices to
          achieve readable, maintainable code.
        </div>
        <div className="about-section2">
          When I&apos;m not coding, I lead a handmade engagement rings brand,
          Petit Bribon. My experience running a small business has taught me to
          always deliver on time, with quality, and communicating with clients
          along the way.
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  tertiary: PropTypes.object.isRequired,
};

export default About;
