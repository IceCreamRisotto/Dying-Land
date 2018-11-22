import React, { Component } from 'react';
// import Header from '../components/header.jsx';
import Header2 from '../components/header2.jsx';
import Main from '../components/main.jsx';
let h5Dom = ['section', 'nav', 'button'];
for (let i = 0; i < h5Dom.length; i++) {
    document.createElement(h5Dom[i]);
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            header: true,
            main: false
        }
    }
    changeAppState = (json) => {
        this.setState(json)
    }
    render() {
        return (
            <div>
                {/* <Header /> */}
                {this.state.header?
                    <Header2 onOff={this.state.header}
                    changeAppState={this.changeAppState} />
                :
                    <Main onOff={this.state.main}
                    changeAppState={this.changeAppState} />
                }
            </div>
        );
    }
}

export default App;
