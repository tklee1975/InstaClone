
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import ApplicationBase from 'Application/Base';
import FeedIndex from 'Feed/Index/FeedIndex';
import UserIndex from 'User/Index/UserIndex';
import PhotoPage from 'Photo/Page/PhotoPage';

const history = createBrowserHistory();


export default (
  <Router history={history}>
    <Route path="/" component={ApplicationBase}>
      <IndexRoute component={FeedIndex} />
      <Route path="/:username" component={UserIndex} />
      <Route path="/p/:photocode" component={PhotoPage} />
    </Route>
  </Router>
);


/**
 * / — Feed
 * /:username - User page
 * /p/:code - Photo page  (open modal if open from List)
 */