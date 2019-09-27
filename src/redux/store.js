import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import counterReducer from "./reducer";

const logger = createLogger({
  collapsed: true
});

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;
