import React from "react";
import LoginForm from "./LoginForm";
import Splash from "./Splash";
import Graphics from "./Graphics";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={LoginForm} />
                    <Route path="/splash" component={Splash} />
                    <Route path="/graphics" component={Graphics} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
