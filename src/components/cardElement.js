import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionButton,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';

function CardElement(props) {
  const { image, title, description, demo, repo } = props;

  return (
    <Card style={{ width: '21rem' }}>
      <CardPrimaryAction tag="a" target="_blank" href={`${demo}`}>
        <CardMedia
          sixteenByNine
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="textSecondaryOnBackground"
            style={{ marginTop: '2rem' }}
          >
            {`${title}`}
          </Typography>
          <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
            {`${description}`}
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <CardActionButton tag="a" target="_blank" href={`${repo}`}>
            Repo
          </CardActionButton>
          <CardActionButton tag="a" target="_blank" href={`${demo}`}>
            Live version
          </CardActionButton>
        </CardActionButtons>
      </CardActions>
    </Card>
  );
}

CardElement.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default CardElement;
