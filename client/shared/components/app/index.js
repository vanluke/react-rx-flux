import React, { PropTypes } from 'react';
import Counter from 'shared/components/counter';
import './_app.scss';

const App = props => <div className="l-app c-app">
  <h1 className="c-app__header c-app__header--h1">Reactive flux POC</h1>
  <Counter {...props} />
  {props.children}
</div>;

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default App;
