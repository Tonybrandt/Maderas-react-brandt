import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import { FirebaseAppProvider } from "reactfire";
// import { firebaseConfig } from "./firebase/config";

const root = ReactDOM.createRoot(document.getElementById("root"));

const firebase = require("firebase/app");

root.render(
  // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <Suspense>
    <App />
  </Suspense>
  // </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
