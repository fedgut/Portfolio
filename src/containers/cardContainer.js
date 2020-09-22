import React from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import CardElement from '../components/cardElement';
import GITHUB_QUERY from '../API/queries';

import bookstore from '../images/bookstore.png';
import calculator from '../images/calculator.png';
import dogApi from '../images/dog_api.png';
import orfeo from '../images/orfeo.png';
import weather from '../images/weather.png';
import placeholder from '../images/placeholder.png';

function CardContainer(props) {
  const { loading, error, data } = useQuery(GITHUB_QUERY);
  const { style } = props;
  const { color, backgroundContrast } = style;
  const reverseStyle = {
    color: backgroundContrast,
    backgroundColor: color,
  };

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const cardArray = data.user.pinnedItems.edges;
  const imageArray = [
    orfeo,
    dogApi,
    weather,
    bookstore,
    calculator,
    placeholder,
  ];

  return (
    <div>
      <div className="projects-wrappers" style={reverseStyle}>
        <div id="projects" className="projects">
          Projects
        </div>
      </div>
      <Grid className="card-grid">
        {cardArray.map(card => (
          <GridCell key={card.node.name}>
            <CardElement
              style={style}
              name={card.node.name}
              description={card.node.description}
              homepageUrl={card.node.homepageUrl}
              url={card.node.url}
              image={imageArray[cardArray.indexOf(card)]}
            />
          </GridCell>
        ))}
      </Grid>
    </div>
  );
}

CardContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
};

export default CardContainer;
