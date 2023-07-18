import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux"
import configureStore from "./redux/reducers/configureStore"
import {BrowserRouter} from "react-router-dom"
import Dashboard from "./components/router/Dashboard";


const store = configureStore();
ReactDOM.render(<BrowserRouter><Provider store={store}><Dashboard/></Provider></BrowserRouter>, document.getElementById("root"));
registerServiceWorker();
