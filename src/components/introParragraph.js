import React from 'react';
import PropTypes from 'prop-types';

export default function IntroParragraph(props) {
  const { secondary } = props;
  return (
    <div>
      <p>
        Hello!
        <br />
        My name is&nbsp;
        <br />
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          Eduardo Gutierrez
        </span>
        <br />
        I&apos;m a Full-stack developer
      </p>
      <span>
        <a
          style={{
            color: secondary.colorContrast,
            backgroundColor: secondary.color,
            fontSize: '60%',
          }}
          href="#about"
        >
          Know more
        </a>
      </span>
    </div>
  );
}

IntroParragraph.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  secondary: PropTypes.object.isRequired,
};
