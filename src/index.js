import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "mobx-react";
import CombinedStore from './CombinedStore';

ReactDOM.render(<Provider {...CombinedStore}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
