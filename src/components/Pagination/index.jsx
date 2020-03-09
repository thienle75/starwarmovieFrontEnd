import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Label, Container} from './style';

class Pagination extends Component {

  state = {
    pageNumbers: [],
    itemSelected: 1,
  }
  
  componentDidMount(){
    const {totalItems, itemsCountPerPage} = this.props;
    this.calculatePageNumbers(totalItems, itemsCountPerPage);
  }
  
  componentWillReceiveProps(nextProps) {
    if(this.props.totalItems !== nextProps.totalItems) {
      const {totalItems, itemsCountPerPage} = nextProps;
      this.calculatePageNumbers(totalItems, itemsCountPerPage);
    }
  }
  
  calculatePageNumbers = (totalItems, itemsCountPerPage) => {
    let pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalItems/itemsCountPerPage); i++)
      pageNumbers.push(i);
    return this.setState({
      pageNumbers: pageNumbers
    });
  }
  
  handleClick = (event, page) => {
    this.setState({itemSelected: page});
    this.props.onPageChange(page);
  }
  
  highlightSelectedItem = (page) => {
    const {itemSelected} = this.state;
    if (page === itemSelected) {
      return {fontWeight: 'bold', fontSize: 'large'};
    } else {
      return {fontWeight: 'normal', fontSize: 'small'};
    }
  }
  
  showPageNumbers = (pageNumbers) => {
    return (
      <Container>
        {pageNumbers.map(number =>
            <Label
              key={number}
              id={number}
              style={this.highlightSelectedItem(number)}
              onClick={e => this.handleClick(e, number)}
            >
              {number}
            </Label>
          )
        }
      </Container>
    )
  }
  
  render() {
    const { pageNumbers } = this.state;
    return (
      this.showPageNumbers(pageNumbers)
    );
  }
}
export default Pagination;
Pagination.propTypes = {
  totalItems: PropTypes.string,
  itemsCountPerPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired
};
Pagination.defaultProps = {
  totalItems: '0',
  itemsCountPerPage: '0',
}
