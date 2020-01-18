import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Login'

const Root = () => {
    const logged = useSelector(state => state.logged.logged);
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                {/* <Route path="/messages" component={logged?MainScreen:notLogged} />
                <Route path="/register" component={Register} /> */}
            </Switch>     
        </BrowserRouter>
    )
}

export default Root;