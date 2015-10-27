'use strict';

import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import 'index.html';
import 'stylus/app.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

import Routes from 'routes';

ReactDOM.render(Routes, document.getElementById('instaclone'));