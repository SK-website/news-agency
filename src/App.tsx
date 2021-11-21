import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <>
    <Router>
      <Switch>
        <Route path="/" component={HomePage}>
          <HomePage />
        </Route>
        {/* <Route path="/article/:articleID" /> */}
        <Route path="*" component={NotFound}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </>
);
export default App;
