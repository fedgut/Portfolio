import React from 'react';
import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

function SocialLinks(props) {
  const { color } = props;
  return (
    <>
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
    </>
  );
}

SocialLinks.propTypes = {
  color: PropTypes.string.isRequired,
};

export default SocialLinks;
