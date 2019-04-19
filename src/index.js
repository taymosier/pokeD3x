import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import pokemon from "./data/pokemon.json"
import './index.css';

ReactDOM.render(<App pokemon={pokemon}/>, document.getElementById('root'));

serviceWorker.unregister();
