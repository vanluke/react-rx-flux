import React, { PropTypes } from 'react';
import './_app.scss';

const App = props => <div className="l-app">{props.children}</div>;

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default App;
