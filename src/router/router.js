import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '@/pages/home';
import Mine from '@/pages/mine';
import Href from '@/pages/href';
import ToDo from '@/pages/toDo/components/App';
import Waterfall from '@/pages/waterfall';


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/mine" component={Mine}/>
            <Route exact path="/ref" component={Href}/>
            <Route exact path="/todo" component={ToDo}/>
            <Route exact path="/waterfall" component={Waterfall}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;