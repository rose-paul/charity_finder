import React from 'react';
import Start from './start';
import Time from './time';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Interest from './interest';

const App = () => {

    return (
      <HashRouter>
        <Route exact path="/" component={Start} />
        <div>
          <Switch>
            <Route exact path="/time" component={Time} />
            <Route exact path="/financial" component={Interest} />
          </Switch>
        </div>
      </HashRouter>
    );
}

export default App;