import React from 'react';
import { render } from 'react-dom';
import App from 'shared/components/app';
import store from 'shared/store';

store.subscribe(state =>
  render(<App {...state} />, document.getElementById('container')));
