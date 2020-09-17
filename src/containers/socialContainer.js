import React from 'react';
import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

function SocialContainer(props) {
  const { secondary } = props;
  const { color } = secondary;
  const { background } = secondary;
  return (
    <div className="social-icons-inner">
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
  );
}

SocialContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  secondary: PropTypes.object.isRequired,
};

export default SocialContainer;
