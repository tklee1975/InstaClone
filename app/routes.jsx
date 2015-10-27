
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import ApplicationBase                    from 'Application/Base';
import IndexDefault                       from 'Index/Default/IndexDefault';

const history = createBrowserHistory();

export default (
  <Router history={history}>
    <Route path="/" component={ApplicationBase}>
      <IndexRoute component={IndexDefault}/>
    </Route>
  </Router>
);