import React from 'react';
import PropTypes from 'prop-types';
import {Container, Loader} from './style'

export default function Loading (props){
   
    return (
      <Container isShow={!props.isShow}>
        <Loader />
      </Container>
    )
}
Loading.propTypes = {
  isShow: PropTypes.bool
};