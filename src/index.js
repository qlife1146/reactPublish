import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { BrowserRouter } from "react-route-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    //   <App/>
    // </BrowserRouter>
);
