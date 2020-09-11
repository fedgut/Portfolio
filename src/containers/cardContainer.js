import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridRow } from '@rmwc/grid';
import CardElement from '../components/cardElement';

class CardContainer extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { cardArray } = this.props;

    return (
      <Grid>
        <GridRow>
          {cardArray.map(card => (
            <CardElement
              key={card.title}
              title={card.title}
              description={card.description}
              demo={card.demo}
              repo={card.repo}
              image={card.image}
            />
          ))}
        </GridRow>
      </Grid>
    );
  }
}

CardContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cardArray: PropTypes.array.isRequired,
};

export default CardContainer;
