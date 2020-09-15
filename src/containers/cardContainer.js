import React from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { useQuery } from '@apollo/client';
import CardElement from '../components/cardElement';
import GITHUB_QUERY from '../API/queries';

function CardContainer() {
  const { loading, error, data } = useQuery(GITHUB_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const cardArray = data.user.pinnedItems.edges;

  return (
    <Grid className="card-grid">
      {cardArray.map(card => (
        <GridCell key={card.node.name}>
          <CardElement
            name={card.node.name}
            description={card.node.description}
            homepageUrl={card.node.homepageUrl}
            url={card.node.url}
            image={card.image}
          />
        </GridCell>
      ))}
    </Grid>
  );
}

export default CardContainer;
