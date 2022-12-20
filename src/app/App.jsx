import React from "react";
import Navbar from "./components/navBar";
import Users from "./layouts/users";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPage from "./components/userPage";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route className="nav-link" path="/main" component={Main} />
                <Route className="nav-link" path="/login" component={Login} />
                <Route
                    className="nav-link"
                    path="/users/:userId"
                    component={UserPage}
                />
                <Route className="nav-link" path="/users" component={Users} />
            </Switch>
        </>
    );
}

export default App;
