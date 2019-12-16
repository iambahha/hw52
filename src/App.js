import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";

import './App.css'

import AboutPage from "./containers/AboutPage/AboutPage";
import Contacts from "./containers/Contacts/Contacts";
import MainPage from "./containers/MainPage/MainPage";

const App = () => {
	return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/project2" component={AboutPage} />
        <Route path="/project3" component={Contacts} />
      </Switch>
    </BrowserRouter>
	);
};

export default App;