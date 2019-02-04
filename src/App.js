import React, { Component } from 'react';

import GlobalStyle from './GlobalStyle';
import Header from './Header';
import ColorList from './ColorList';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header>
          Biblioteca de culori.
        </Header>
        <ColorList />
      </div>
    );
  }
}

export default App;
