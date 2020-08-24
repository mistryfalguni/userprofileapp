import React from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

//components
import UserList from './components/UserList';
import UserProfile from './components/UserPRofile';
import Gallery from './components/pages/Gallery';
import Posts from './components/pages/Posts';
import ToDo from './components/pages/ToDo';

//css
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      
      <Switch>
      <Route exact = {true} path = "/" component = {UserList} />
      <Route  exact = {true} path = "/:username/profile" component = {UserProfile}/>
      <Route  exact = {true} path = "/:username/posts" component = {Posts}/>
      <Route  exact = {true} path = "/:username/gallery" component = {Gallery}/>
      <Route  exact = {true} path = "/:username/toDo" component = {ToDo}/>
      </Switch>

     </BrowserRouter>
    </div>
  );
}

export default App;
