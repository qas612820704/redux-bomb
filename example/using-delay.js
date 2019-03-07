/* eslint-disable import/no-extraneous-dependencies, no-console */
import { createStore, applyMiddleware } from 'redux';
import bomb from '../src';

const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') return state + 1;

  return state;
};

const store = createStore(counter, /* persisState, */ applyMiddleware(bomb.delay(1000)));

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INCREMENT' });
