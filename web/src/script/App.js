import React, { Component } from 'react';
// import Header from '../components/header.jsx';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
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
        if(window.location.href.indexOf('https')===-1){
            this.url="";
        }else{
            this.url=window.location.href;
        }
    }
    changeAppState = (json) => {
        this.setState(json)
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path={window.location.href.indexOf('https')?'/':window.location.href+'/'} exact render={()=>{return(
                            <Header2/>
                        )}}/>
                        <Route path={window.location.href.indexOf('https')?'/main':window.location.href+'/main'} render={()=>{return(
                            <Main/>
                        )}}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
