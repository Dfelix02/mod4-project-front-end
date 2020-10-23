import React, {Component} from 'react';
import ItemList from './itemList';
import ItemDetails from './itemDetails';
import Cart from "./cart";
import LoginForms from "./loginForms"
import {Switch,Route,withRouter} from "react-router-dom"

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <Switch>
                <Route path="/" component={ItemList} exact />
                <Route path="/item/:id" component={ItemDetails} exact />
                <Route path="/cart" component={Cart} exact />
                <Route path="/loginForms" component={LoginForms} exact />
            </Switch>
        );
    }
}
let componentToRoute = withRouter(Body)
export default componentToRoute;