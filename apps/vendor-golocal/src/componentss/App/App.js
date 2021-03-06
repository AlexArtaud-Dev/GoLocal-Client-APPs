import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from '../NoMatch/NotFound'
import Home from "../../Pages/Home/Home";
import ArtisanPage from "../../Pages/Artisan/Artisan";
import Login from "../../Pages/Login/Login";
import ShopPage from "../../Pages/Shop/Shop";
import ItemPage from "../../Pages/Item/Service";
import PackagePage from "../../Pages/Package/PackagePage";


function App() {

  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
              <Route exact path="/artisan">
                  <ArtisanPage/>
              </Route>
              <Route exact path="/login">
                  <Login/>
              </Route>
              <Route exact path="/artisan/shop">
                  <ShopPage/>
              </Route>
              <Route exact path="/artisan/shop/item">
                  <ItemPage/>
              </Route>
              <Route exact path="/artisan/shop/item/package">
                  <PackagePage/>
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
