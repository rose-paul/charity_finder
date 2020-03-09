import React from 'react';
import Questions from './questions';
import {HashRouter, Route, Switch} from 'react-router-dom';
import CharityIndex from './charityIndex';

const App = () => {

    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Questions} />
            <Route exact path="/index" component={CharityIndex} />
          </Switch>
        </div>
      </HashRouter>
    );
}

export default App;