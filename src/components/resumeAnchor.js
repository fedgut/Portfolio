import React from 'react';
import PropTypes from 'prop-types';

function ResumeAnchor(props) {
  const { style } = props;
  return (
    <>
      <a
        style={{
          fontSize: 'inherit',
          color: style.colorContrast,
          backgroundColor: style.color,
        }}
        href="https://eduardo-portfolio.s3.us-east-2.amazonaws.com/Eduardo_Gutierrez_Resume.pdf"
      >
        <br />
        Get my Resume
      </a>
    </>
  );
}

ResumeAnchor.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
};

export default ResumeAnchor;
