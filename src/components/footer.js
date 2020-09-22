import React from 'react';
import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

function Footer(props) {
  const { style } = props;
  const { color, background } = style;
  return (
    <div className="footer-wrapper" style={{ color, background }}>
      <div className="footer">
        <div className="cta-footer">
          <p>Get in touch!</p>
        </div>
        <div className="social-icons-footer">
          <SocialIcon
            network="twitter"
            url="https://twitter.com/eduardo_gtzp"
            bgColor={`${color}`}
            target="_blank"
          />
          <SocialIcon
            network="linkedin"
            url="https://www.linkedin.com/in/eduardo-gutierrezp/"
            bgColor={`${color}`}
            target="_blank"
          />
          <SocialIcon
            url="mailto:fedgut@gmail.com"
            bgColor={`${color}`}
            target="_blank"
          />
          <SocialIcon
            network="github"
            url="https://github.com/fedgut"
            bgColor={`${color}`}
            target="_blank"
          />
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
