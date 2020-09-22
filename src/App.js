import React, { Component } from 'react';
import '@rmwc/theme/styles';
import '@rmwc/button/styles';
import '@rmwc/grid/styles';
import '@rmwc/typography/styles';
import '@rmwc/card/styles';
import './App.css';

import { ApolloProvider } from '@apollo/client';
import client from './API/gitHubClient';
import Intro from './containers/intro';
import About from './containers/about';
import ColorSelector from './components/colorSelector';
import CardContainer from './containers/cardContainer';
import Footer from './containers/footer';
import { AQUA_STYLE } from './default_styles/style';

class App extends Component {
  constructor() {
    super();
    this.state = AQUA_STYLE;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(style) {
    const { primary, secondary, tertiary } = style;
    this.setState({ primary, secondary, tertiary });
  }

  render() {
    const { primary, secondary, tertiary } = this.state;
    return (
      <div style={primary}>
        <ApolloProvider client={client}>
          <ColorSelector style={secondary} handleClick={this.handleClick} />
          <Intro primary={primary} secondary={secondary} />
          <About secondary={secondary} tertiary={tertiary} />
          <CardContainer style={secondary} />
          <Footer style={secondary} />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
