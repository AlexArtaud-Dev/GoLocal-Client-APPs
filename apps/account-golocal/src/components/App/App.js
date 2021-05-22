import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthenticationProvider, oidcLog } from '@axa-fr/react-oidc-context';
import oidcConfiguration from './config.json';
import NoMatch from '../NoMatch/NotFound'
import Home from "../../Pages/Home/Home";

function App() {

    return (
        <div>
            <Router>
                <AuthenticationProvider configuration={oidcConfiguration} loggerLevel={oidcLog.DEBUG}>
                    {/*<AuthenticationProvider configuration={oidcConfiguration} loggerLevel={oidcLog.DEBUG}>*/}
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </AuthenticationProvider>
            </Router>
        </div>
    );
}

export default App;