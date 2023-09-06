import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { middleware } from './middelware';
const store: any = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, middleware))
);

export default store;
