import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import ContentCharacter from './content/content_character.jsx';
// import ContentIntroduction from './content/content_introduction.jsx';
// import ContentMaterial from './content/content_material.jsx';
class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navarr = this.props.navarr;
        return (
            <div className="nav-wrap">
                {navarr.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link to={item.link} key={index}>{item.name}</Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Nav;
