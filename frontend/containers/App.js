import React, { Component } from 'react';

import ListItem from '../components/ListItem';

class App extends Component {
  render() {
    return (
      <ListItem name="Hello" email="hello@example.com" />
    );
  }
}

export default App;
