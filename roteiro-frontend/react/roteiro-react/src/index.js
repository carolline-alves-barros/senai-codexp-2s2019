import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// importar a pagina de categorias
import Categorias from './pages/Categorias/Categorias';
// importar as dependencias necessarias
import {Route, BrowserRouter as Router} from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

// realizar a criacao das rotas
const Rotas = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/categorias" component={Categorias} />
        </div>
    </Router>
)

// ReactDOM.render(<App />, document.getElementById('root'));
// trocar a renderizacao
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
