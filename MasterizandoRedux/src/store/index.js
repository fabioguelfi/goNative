import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const middleware = [];

const createApproprieteStore = __DEV__ ? console.tron.createStore : createStore
const store = createApproprieteStore(reducers, applyMiddleware(...middleware));

export default  store;
