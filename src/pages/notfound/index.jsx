import React, { Component } from 'react';
import { NotFound as NotFoundComponent } from '../../components';

class NotFound extends Component {
  render() {
    return (
      <NotFoundComponent message="Page not found" />
    );
  }
}

export default NotFound;
