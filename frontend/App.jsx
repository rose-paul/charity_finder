import React from 'react';
import Start from './start'
import Time from './time'
import Finance from './finance'
import Curious from './curious'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

const App = () => {
    return (
      <HashRouter>
        <div>
          <Start />
          <Switch>
            <Route exact path="/time" component={Time} />
            <Route exact path="/financial" component={Finance} />
            <Route exact path="/curious" component={Curious} />
          </Switch>
        </div>
      </HashRouter>
    );
}

export default App;