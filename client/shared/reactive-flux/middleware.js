import { Subject } from 'rxjs';
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET,
} from 'shared/actions';

export const dispatch = new Subject();

const dispatcher = dispatch.asObservable()
    .publishReplay(1)
    .refCount();

const actions = [COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET];

const hasAction = args => Object.keys(args)
  .some(key => actions.indexOf(args[key]) !== -1);

export function buildFilterFunction(...args) {
  if (!hasAction(args)) {
    throw new Error('Invalid filters provided to dispatcher');
  }

  return msg => Object.keys(args)
    .some(key => args[key] === msg.type);
}

export const reactiveFlux = () => {
  function getAction(args) {
    if (!args.length) {
      return dispatcher;
    }

    if (typeof args[0] === 'function') {
      return dispatcher.filter(args[0]);
    }

    return dispatcher
      .filter(buildFilterFunction(args));
  }

  return {
    getAction,
    getPayload: args => getAction(args).pluck('payload'),
  };
};
