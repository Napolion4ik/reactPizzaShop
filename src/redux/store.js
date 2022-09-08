import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import pizzas from "./reducers/pizzas";
import filters from "./reducers/filters";
import cart from "./reducers/cart";
import thunk from "redux-thunk";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const rootReducer = combineReducers({
    pizzas,
    filters,
    cart,
});
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;
