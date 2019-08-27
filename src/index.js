import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Admin from './components/Admin';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AddProducts from './components/AddProducts';

const store=createStore(reducer);
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <Switch>
                <Route path="/add" component={AddProducts}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/" component={App}/>  
                  
            </Switch>
        </div>
        </BrowserRouter>
    </Provider>

    ,document.getElementById("root"));

