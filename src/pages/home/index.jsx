import React, {Component} from 'react';
import {Container, FormContainer, SubmitButton} from './style';
import {SearchInput} from '../../components'


class Index extends Component {
  
  onChangeInput = (name, value) => {
    this.setState({[name]: value});
  }
  
  state = {
    inputSearch: ''
  }

  
  submitForm = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/movies',
      search: this.state.inputSearch,
    });
  }
  
  render() {
    return (
      <Container>
        <img  style={{width: '40%'}}/>
        <FormContainer onSubmit={this.submitForm} >
          <SubmitButton type="submit">Start</SubmitButton>
        </FormContainer>
      </Container>
    );
  }

}


export default Index;
