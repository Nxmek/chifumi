import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/Apps";
import "./Style/index.scss";

/*Redux*/
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import sizeMiddleware from "./redux/middlewares/size-middleware";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

const middlewares = applyMiddleware(sizeMiddleware);

// LIEN AVEC L'EXTENSION REDUX DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middlewares));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
