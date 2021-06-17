import React from 'react';
import {
    Switch,
    Route,
    Redirect
}   from 'react-router-dom';

import { Nav } from '../components/ui/Nav';
import { CuentosScreen } from '../components/CuentosScreen';
import { DibujosScreen } from '../components/DibujosScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <div>
                <Nav />

                <div className="content-wrap">
                    <Switch>
                        <Route exact path="/" component={CuentosScreen} />

                        <Route exact path="/dibujos" component={DibujosScreen} />

                        {/* ERROR 404 */}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </>
    );
};
