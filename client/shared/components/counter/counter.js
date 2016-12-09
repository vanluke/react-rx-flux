import React, { PropTypes } from 'react';
import 'shared/components/counter/_counter.scss';

const Counter =
  ({ count, incrementCount, decrementCount }) =>
    <div className="c-counter">
      <div className="c-counter__item">Increment
        <button
          className="c-counter__button c-counter__button--plus"
          onClick={incrementCount}
        >+</button>
      </div>
      <div className="c-counter__item c-counter__counter">Couter
        <div className="c-counter__count">{count}</div>
      </div>
      <div className="c-counter__item">Decrement
        <button
          className="c-counter__button c-counter__button--minus"
          onClick={decrementCount}
        >-</button>
      </div>
    </div>;

Counter.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.func,
  decrementCount: PropTypes.func,
};

export default Counter;
