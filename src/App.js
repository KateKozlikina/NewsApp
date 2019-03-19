import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './containers/Login';
import NewsPage from './components/NewsPage';
import Profile from './components/Profile';

const App = () => (
  <div className="container">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/news" component={NewsPage} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </div>
);


export default App;
