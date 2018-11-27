import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Header2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video:false,
            videoBtn:false,
            banner:true,
            goMainBtn:true,
            dlBtn:true
        }
    }
    componentDidMount() {
        this.setState({videoBtn:true})
    }
    seeVideo=()=>{
        this.setState({
            video:true,
            banner:false
        })
    }
    seeBanner=()=>{
        this.setState({
            video:false,
            banner:true
        })
    }
    changeAppState=()=>{
        this.props.changeAppState({
            header:false,
            main:true
        })
    }
    render() {
        return (
            <section className="header">
                {this.state.video?<video src={require('../static/ball.mp4')} className="banner-video" type="video/mp4" autoPlay muted loop />:null}
                {this.state.banner?<div className="banner-image"><h1>彌留之地</h1></div>:null}
                {this.state.goMainBtn?<Link to={window.location.href.indexOf('https')?'/main':window.location.href+'/main'} className="go-main-btn">往大廳</Link>:null}
                {this.state.dlBtn?<Link to={window.location.href.indexOf('https')?'/':window.location.href+'/'} className="dl-btn">下載</Link>:null}
                {this.state.videoBtn?<Link to={window.location.href.indexOf('https')?'/':window.location.href+'/'} className="video-btn" onClick={this.state.banner?this.seeVideo:this.seeBanner}>{this.state.banner?'看影片':'看圖片'}</Link>:null}
            </section>
        );
    }
}
export default Header2;
