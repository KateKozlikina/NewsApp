import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './containers/Login';
import NewsPage from './components/NewsPage';
import ProfileContainer from './containers/Profile';

const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/news" component={NewsPage} />
        <Route path="/profile" component={ProfileContainer} />
      </Switch>
    </div>
  </div>
);


export default App;
