import { dispatch } from 'shared/reactive-flux';

export default function createDispatcher(type, payload) {
  const action = { type, payload };
  dispatch.next(action);
}
