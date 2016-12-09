import Rx from 'rxjs';
// Andre Stalz code rewittend to es6, downloaded from github

export default function combineLatestObj(obj) {
  const sources = [];
  const keys = [];
  Object.keys(obj).forEach((key) => {
    if ({}.hasOwnProperty.call(obj, key)) {
      keys.push(key.replace(/\$$/, ''));
      sources.push(obj[key]);
    }
  });

  return Rx.Observable.combineLatest(sources, (...args) => {
    const argsLength = args.length;
    const combination = {};
    for (let i = argsLength - 1; i >= 0; i -= 1) {
      combination[keys[i]] = args[i];
    }
    return combination;
  });
}
