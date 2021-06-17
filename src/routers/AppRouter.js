import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import { LoginScreen } from '../components/auth/LoginScreen';
import { SingleCuentoScreen } from '../components/SingleCuentoScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route exact path="/auth/login" component={LoginScreen} />

                    <Route exact path="/cuento/:id" component={SingleCuentoScreen} />

                    <Route path="/" component={DashboardRoutes} />

                </Switch>
            </div>
        </Router>
    )
}