import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { data } from '../data/data';
import { readDibujos } from '../action/crud';

  
import { LoginScreen } from '../components/auth/LoginScreen';
import { EditScreen } from '../components/edit/EditScreen';
import { SingleCuentoScreen } from '../components/SingleCuentoScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { useDispatch } from 'react-redux';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const { dibujos } = data[0];
    dispatch( readDibujos( dibujos ) );

    return (
        <Router>
            <div>
                <Switch>

                    <Route exact path="/auth/login" component={LoginScreen} />

                    <Route exact path="/cuento/:url" component={SingleCuentoScreen} />

                    <Route exact path="/edit" component={EditScreen} />

                    <Route path="/" component={DashboardRoutes} />

                </Switch>
            </div>
        </Router>
    )
}