import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './nav.jsx';
import Content from './content.jsx';
import ContentCharacter from './content/content_character.jsx';
import ContentIntroduction from './content/content_introduction.jsx';
import ContentMaterial from './content/content_material.jsx';
class Main extends Component {
    constructor() {
        super();
        this.state = {
            navarr: [
                {
                    name: '角色',
                    link: '/character',
                    component: ContentCharacter
                }, {
                    name: '介紹',
                    link: '/introduction',
                    component: ContentIntroduction
                }, {
                    name: '素材',
                    link: '/material',
                    component: ContentMaterial
                }
            ]
        };
    }
    urlChange = () => {
        console.log('url改了');
    }
    render() {
        return (
            <Router>
                <main>
                    <Nav
                        navarr={this.state.navarr}
                    />
                    <Content
                        navarr={this.state.navarr}
                    />
                </main>
            </Router>
        );
    }
}

export default Main;
