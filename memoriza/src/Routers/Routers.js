import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Game from "../Pages/Game/Game";

const Routers = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/game" component={Game} />
        </Switch>
    </BrowserRouter>
    )
};

export default Routers;