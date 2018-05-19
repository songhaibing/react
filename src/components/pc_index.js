import React, { Component } from 'react';
import PcHeader from './pc_header'
import PcFooter from "./pc_footer";
class PcIndex extends Component {
    render() {
        return (
            <div>
                <PcHeader/>
                <PcFooter/>
            </div>
        );
    }
}

export default  PcIndex;
