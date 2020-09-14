import React, { Component } from 'react';
import '@rmwc/theme/styles';
import '@rmwc/button/styles';
import '@rmwc/grid/styles';
import '@rmwc/typography/styles';
import '@rmwc/card/styles';
import './App.css';

import Intro from './components/intro';
import About from './components/about';
import ColorSelector from './components/colorSelector';
import CardContainer from './containers/cardContainer';
import { DEFAULT_STYLE } from './default_styles/style';

import placeholder from './images/placeholder.png';

class App extends Component {
  constructor() {
    super();
    this.state = DEFAULT_STYLE;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(style) {
    const { primary, secondary, tertiary } = style;
    this.setState({ primary, secondary, tertiary });
  }

  render() {
    const { primary, secondary, tertiary } = this.state;
    const background = primary;
    return (
      <div style={background}>
        <Intro primary={primary} secondary={secondary} />
        <About tertiary={tertiary} />
        <ColorSelector handleClick={this.handleClick} />
        <CardContainer
          cardArray={[
            {
              name: 'Title',
              description: 'Description',
              homepageUrl: 'https://www.google.com',
              url: 'https://github.com/fedgut',
              image: placeholder,
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
