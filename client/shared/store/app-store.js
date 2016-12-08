import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import dispatch from 'shared/dispatcher';
import reactiveFluxMiddleware from 'shared/reactive-flux';
import combineLatestObj from 'shared/rx-extensions';
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
} from 'shared/actions';

const middleware = reactiveFluxMiddleware();

const increment = middleware
  .getPayload(COUNTER_INCREMENT)
  .mapTo(1);

const decrement = middleware
  .getPayload(COUNTER_DECREMENT)
  .mapTo(-1);

export const reset = Observable.of(0);

export const count = Observable.merge(increment, decrement)
  .scan((one, two) => one + two)
  .startWith(0);

export const incrementCount =
    Observable.of(() => dispatch(COUNTER_INCREMENT, 1));

export const decrementCount =
    Observable.of(() => dispatch(COUNTER_DECREMENT, -1));

export default
  combineLatestObj({ count, incrementCount, decrementCount });
