import React from 'react';
import Start from './start';
import Questions from './questions';
import {HashRouter, Route, Switch} from 'react-router-dom';
import CharityIndex from './charityIndex';

const App = () => {

    return (
      <HashRouter>
        <Route exact path="/" component={Start} />
        <div>
          <Switch>
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/index" component={CharityIndex} />
          </Switch>
        </div>
      </HashRouter>
    );
}

export default App;