import React, { Component } from 'react';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            temporarilyDom: [
                <div key='0' className="banner-image"></div>,
                <div key='1' className="mask"></div>
            ],
            retainDom: [
                // <button key='0' className="go-main">往大廳</button>,
                // <button key='1' className="dl">下載</button>
            ],
            srcDom: ''
        }
    }
    componentDidMount() {

        setTimeout(() => {
            this.setState({
                srcDom: <video key='0' src={require('../static/ball.mp4')} className="banner-video" type="video/mp4" autoPlay muted loop />,
                temporarilyDom: null
            })
        }, 2000)
    }
    render() {
        return (
            <section className="header">
                {this.state.temporarilyDom}
                {this.state.retainDom}
                {this.state.srcDom}
            </section>
        );
    }
}
export default Header;
