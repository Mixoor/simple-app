import React from "react";
import {BrowserRouter as Router , Route, Switch,Redirect} from "react-router-dom";
import PermissionPage from "@/pages/PermissionPage/PermissionPage";
import AddRole from "@/pages/RolePage/AddRole";
import ListRoles from "@/pages/RolePage/ListRoles";
import LoginPage from "@/pages/LoginPage/LoginPage";
import NetworkPage from "@/pages/NetworkPage/NetworkPage";
import AddNetwork from "@/pages/NetworkPage/AddNetwork";
import ComplexPage from "@/pages/ComplexPage/ComplexPage";
import AddComplex from "@/pages/ComplexPage/AddComplex";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import ClientsPage from "./pages/ClientsPage/ClientsPage";
import ReservationsPage from "./pages/ReservationsPage/ReservationsPage";
import PlanningPage from "./pages/PlanningPage/PlanningPage";

import './App.css';
import AddClient from "./pages/ClientsPage/AddClient";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact>
                <LoginPage/>
            </Route>
            <Route path="/role" exact>
                <ListRoles/>
            </Route>
            <Route path="/role/add" exact>
                <AddRole/>
            </Route>
            <Route path="/permission" exact>
                <PermissionPage/>
            </Route>
            <Route path="/network" exact>
                <NetworkPage/>
            </Route>
            <Route path="/network/add" exact>
                <AddNetwork/>
            </Route>
            <Route path="/complex" exact>
                <ComplexPage/>
            </Route>
            <Route path="/complex/add" exact>
                <AddComplex/>
            </Route>
            <Route path="/profile" exact>
                <ProfilePage/>
            </Route>
            <Route path="/clients" exact>
                <ClientsPage/>
            </Route>
            <Route path="/reservations" exact>
                <ReservationsPage/>
            </Route>
            <Route path="/planning" exact>
                <PlanningPage/>
            </Route>
            <Route path="/clients/add" exact>
                <AddClient/>
            </Route>
            <Route path="*">
                <Redirect to="/"/>
            </Route>

        </Switch>

    </Router>
  );
}

export default App;
