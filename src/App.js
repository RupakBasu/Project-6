import React from 'react'
import {Switch,Route} from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import Home from './views/Home';
import './App.css'
import Search from '.views/Search';


class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
       <Switch>
        <Route exact path ={'/'} component ={Home}/>
        <Route exact path ={'/'} component = {Search}/>
      </Switch>
      </div>
    );
  }
}

export default BooksApp
