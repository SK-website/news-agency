import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Details from './pages/details/Details';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </>
);
export default App;
