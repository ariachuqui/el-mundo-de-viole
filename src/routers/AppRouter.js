import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { startCheking } from '../action/auth';
import { startReadingDibujos } from '../action/crud';

import { LoginScreen } from '../components/auth/LoginScreen';
import { EditScreen } from '../components/edit/EditScreen';
import { SingleCuentoScreen } from '../components/SingleCuentoScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRouter';
import { PrivateRoute } from './PrivateRouter';



export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch( startCheking() );
    }, [dispatch]);

    if( checking ) {
        return <h1>Espere...</h1>
    }

    dispatch( startReadingDibujos() );

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/auth/login" 
                        component={LoginScreen}
                        isAuthenticated={ !!uid } 
                    />

                    <PrivateRoute 
                        exact 
                        path="/edit" 
                        component={EditScreen}
                        isAuthenticated={ !!uid } 
                    />

                    <Route exact path="/cuento/:url" component={SingleCuentoScreen} />


                    <Route path="/" component={DashboardRoutes} />

                </Switch>
            </div>
        </Router>
    )
}