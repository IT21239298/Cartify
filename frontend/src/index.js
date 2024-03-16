import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./auth/redux/store";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthContextProvider>
        <App />
        </AuthContextProvider>
    </React.StrictMode>
  </Provider>
);
