
/* import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 */



import React, { Component } from 'react';
// TOdo. 1. make this code available to APp.js 2. refactor into FSC
class Button extends Component {
    render() {
        const { onClick, className = '', children,
        } = this.props;
        return (<button
            onClick={onClick}
            className={className}
            type="button"
        >{children}
        </button>);
    }
}
export default Button;