import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from '../components/socialLinks';

function SocialContainer(props) {
  const { secondary } = props;
  const { color } = secondary;
  return (
    <div className="social-icons-inner">
      <SocialLinks color={color} />
    </div>
  );
}

SocialContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  secondary: PropTypes.object.isRequired,
};

export default SocialContainer;
