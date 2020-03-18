import React from 'react';
import Questions from './questions';
import {HashRouter, Route, Switch} from 'react-router-dom';
import CharityIndex from './charityIndex';
import Start from './start';

const App = () => {

    return (
      <HashRouter>
        <div>
        <p>{process.env.APP_ID}</p>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/index" component={CharityIndex} />
          </Switch>
        </div>
      </HashRouter>
    );
}

export default App;