import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Upload from './upload/pages/Upload';
import Report from './report/pages/Report';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <Upload />
          </Route>
          <Route path="/report" exact>
            <Report />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
