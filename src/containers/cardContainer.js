import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridRow } from '@rmwc/grid';
import { useQuery } from '@apollo/client';
import CardElement from '../components/cardElement';
import { GITHUB_QUERY } from '../API/queries';

function CardContainer(props) {
  const data = useQuery(GITHUB_QUERY);
  const { cardArray } = props;
  console.log(data);
  return (
    <Grid>
      <GridRow>
        {cardArray.map(card => (
          <CardElement
            key={card.name}
            name={card.name}
            description={card.description}
            homepageUrl={card.homepageUrl}
            url={card.url}
            image={card.image}
          />
        ))}
      </GridRow>
    </Grid>
  );
}

export default CardContainer;
