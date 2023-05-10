import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Bind ALL the middleware based on project mode
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV != 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// Init reducers
const reducer = (state, { type, payload }) => {
  if (type === HYDRATE) {
    const nextState = {
      ...state,
      ...payload,
    };
    return nextState;
  } else {
    return reducers(state, { type, payload });
  }
};

// Initialize store
const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);