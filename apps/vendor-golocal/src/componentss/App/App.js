import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from '../NoMatch/NotFound'
import Home from "../../Pages/Home/Home";


function App() {

  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;