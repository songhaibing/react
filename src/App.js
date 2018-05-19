import React, { Component } from 'react';
import './App.css';
import PcIndex from './components/pc_index'
import MediaQuery from 'react-responsive'
import MobileIndex from './components/mobile_index'
class App extends Component {
  render() {
    return (
      <div >
          <MediaQuery query='(min-device-width:1224px)'>
              <PcIndex/>
          </MediaQuery>
          <MediaQuery query='(max-device-width:1224px)'>
              <MobileIndex/>
          </MediaQuery>

      </div>
    );
  }
}

export default App;
