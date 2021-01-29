import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { caseListReducer } from "./reducers/caseReducer";
import { payListReducer } from "./reducers/payReducer";

const initialState = {};
const reducer = combineReducers({
  caseList: caseListReducer,
  payList: payListReducer
});
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhacer(applyMiddleware(thunk))
);

export default store;
