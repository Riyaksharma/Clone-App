import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getProductsReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  //   cart: cartReducer,
  getProduct: getProductsReducer,
  //   getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
