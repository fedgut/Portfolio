import React, { Component } from 'react';
import WebFont from 'webfontloader';
import '@rmwc/theme/styles';
import '@rmwc/button/styles';
import '@rmwc/grid/styles';
import './App.css';

import Intro from './components/intro';
import About from './components/about';
import ColorSelector from './components/color_selector';
import { DEFAULT_STYLE } from './default_styles/style';

WebFont.load({
  google: {
    families: ['Roboto:300,500,700', 'Material Icons'],
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = DEFAULT_STYLE;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(style) {
    const { primary, secondary, terciary } = style;
    this.setState({ primary, secondary, terciary });
  }

  render() {
    const { primary, secondary, terciary } = this.state;
    const background = primary;
    return (
      <div style={background}>
        <Intro primary={primary} secondary={secondary} />
        <About terciary={terciary} />
        <ColorSelector handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
