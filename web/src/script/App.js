import React, { Component } from 'react';
import Header from '../components/header.jsx';
import Main from '../components/main.jsx';
let h5Dom = ['section', 'nav','button'];
for (let i = 0; i < h5Dom.length; i++) {
  document.createElement(h5Dom[i]);
}

class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
