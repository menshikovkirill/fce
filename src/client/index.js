import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Application } from './Application';
//import { Provider } from 'react-redux';

// import { Application } from './Application';
// import { ExampleApi, CartApi } from './api';
// import { initStore } from './store';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const basename = '/';

// const api = new ExampleApi(basename);
// const cart = new CartApi();
// const store = initStore(api, cart);
const application = (
    <BrowserRouter basename={basename}>
        <Application />
    </BrowserRouter>
);

render(application, document.getElementById('root'));
