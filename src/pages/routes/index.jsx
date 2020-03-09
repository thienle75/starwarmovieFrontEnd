import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home, Movies, NotFound, Movie} from '../index'

class Index extends Component {
  
  render() {
    return (
      <Switch>
        <Route path="/movies/:id" component={Movie}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/index" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route  component={NotFound}/>
      </Switch>
    );
  }
}

export default Index;



