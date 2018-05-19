import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './components/css/mobile_header.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
if (module.hot) {
    module.hot.accept();
}

