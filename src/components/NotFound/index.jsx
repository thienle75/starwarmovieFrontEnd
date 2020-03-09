/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Description,
} from './style';

export default function NotFound(props) {
  return (
    <Container>
      <Description >
        <span style={{ fontSize: '400%' }}>404</span>
        <p>{props.message}</p>
      </Description >
    </Container>
  );
}
NotFound.propTypes = {
  message: PropTypes.string,
};
NotFound.defaultProps = {
  message: 'Sorry, Not Found!!',
}