import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from '../components/socialLinks';
import resumeAnchor from '../components/resumeAnchor';
import ResumeAnchor from '../components/resumeAnchor';

function Footer(props) {
  const { style } = props;
  const { color, background } = style;
  return (
    <div className="footer-wrapper" style={{ color, background }}>
      <div className="footer">
        <div>
          <p>Would you like to collaborate? Let&apos;s get in touch!</p>
        </div>
        <div className="social-icons-footer">
          <SocialLinks color={color} />
        </div>
        <div>
          <ResumeAnchor style={style} />
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
};

export default Footer;
