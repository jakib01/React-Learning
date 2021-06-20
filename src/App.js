import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Card from './components/Card'
import Data from './data.json'
import Navbar from './components/layouts/Navbar'
import OnChange from './components/Onchange'
import Home from './components/Home'
import CounterCC from './components/CounterCC'
import CounterFC from './components/CounterFC'
import Form from './components/Form/Form'

function App() {

    let items = [];
    items = Data.map((item) =>
        <Card
            firstName={item.first_name}
            lastName={item.last_name}
            email={item.email}
            country={item.country}
        />);

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/card">{items}</Route>
                    <Route exact path="/onchange" component={OnChange} />
                    <Route exact path="/counter/class/component" component={CounterCC} />
                    <Route exact path="/counter/functional/component" component={CounterFC} />
                    <Route exact path="/form" component={Form} />
                    {/*<Route exact path="/contact" component={Contact}/>*/}
                    {/*<Route exact path="/products/add" component={AddProduct}/>*/}
                    {/*<Route exact path="/products/edit/:id" component={EditProduct}/>*/}
                    {/*<Route exact path="/products/:id" component={Product}/>*/}
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
