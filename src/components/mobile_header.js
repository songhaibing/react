import React, { Component } from 'react';
// import './css/mobile_header.css'
import logo from '../images/logo.png'
class MobileHeader extends Component {
    render() {
        return (
            <div id='mobileHeader'>
                <header>
                    <img src={logo} alt='logo'/>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    }
}

export default  MobileHeader;
