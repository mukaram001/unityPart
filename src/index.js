import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "decentraland-ui/dist/themes/base-theme.css";
import "decentraland-ui/dist/themes/alternative/light-theme.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { MORALIS_APPLICATION_ID, MORALIS_SERVER_URL } from "./config/endpoints";
import { Provider } from "react-redux";
import store from "./components/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <MoralisProvider appId={MORALIS_APPLICATION_ID} serverUrl={MORALIS_SERVER_URL}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </Provider>
);

reportWebVitals();
