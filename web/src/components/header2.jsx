import React, { Component } from 'react';
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
            this.props.onOff?
            <section className="header">
                {this.state.video?<video src={require('../static/ball.mp4')} className="banner-video" type="video/mp4" autoPlay muted loop />:null}
                {this.state.banner?<div className="banner-image"><h1>彌留之地</h1></div>:null}
                {this.state.goMainBtn?<button className="go-main-btn" onClick={this.changeAppState}>往大廳</button>:null}
                {this.state.dlBtn?<button className="dl-btn">下載</button>:null}
                {this.state.videoBtn?<button className="video-btn" onClick={this.state.banner?this.seeVideo:this.seeBanner}>{this.state.banner?'看影片':'看圖片'}</button>:null}
            </section>:null
        );
    }
}
export default Header2;
