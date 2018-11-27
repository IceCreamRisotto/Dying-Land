import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './nav.jsx';
import Content from './content.jsx';
import ContentCharacter from './content/content_character.jsx';
import ContentIntroduction from './content/content_introduction.jsx';
import ContentMaterial from './content/content_material.jsx';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navarr: [
                {
                    name: '角色',
                    link: window.location.href.indexOf('https')?'/character':window.location.href+'/character',
                    component: ContentCharacter
                }, {
                    name: '介紹',
                    link: window.location.href.indexOf('https')?'/introduction':window.location.href+'/introduction',
                    component: ContentIntroduction
                }, {
                    name: '素材',
                    link: window.location.href.indexOf('https')?'/material':window.location.href+'/material',
                    component: ContentMaterial
                }
            ]
        };
    }
    changeAppState=()=>{
        this.props.changeAppState({
            header:true,
            main:false
        })
    }
    render() {
        return (
            <main>
                <Link to='/'className="go-banner-btn">{'<<<回首頁'}</Link>
                <Router>
                    <div>
                        <Nav
                            navarr={this.state.navarr}
                        />
                        <Content
                            navarr={this.state.navarr}
                        />
                    </div>
                </Router>
            </main>
        );
    }
}

export default Main;
