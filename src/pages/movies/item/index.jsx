import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header as SearchHeader, Loading, NotFound } from '../../../components'
import {
  Awards,
  Container,
  ContainerSearchHeader,
  Cover,
  Description,
  Header,
  LineRateImdb,
  MetascoreContainer,
  MetascoreLabel,
  Name,
  Page,
  Plot,
  Root,
  RootSecond,
  TextSmall,
  Title,
  Year
} from './style';

import {
  getMovieItem,
  getMoviesList
} from '../../../actions/movies';

class Index extends Component {
  
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchMovie();
      this.props.history.goBack();
    }
  }
  
  searchMovie = () => {
    this.props.moviesList(this.state.inputSearch);
  }
  
  state = {
    inputSearch: ''
  }
  onChangeInput = (name, value) => {
    this.setState({[name]: value});
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMovieItem(id);
  }
  
  render() {
    const {movies} = this.props;
    const item = movies.item;
    return (
      <Root>
        {item.Response === 'True' ?
        <RootSecond>
          <Loading isShow={movies.isFetching}/>
          <Page>
            <Header>
              <ContainerSearchHeader>
                <SearchHeader onKeyPress={this.handleKeyPress} onChangeInput={this.onChangeInput}/>
              </ContainerSearchHeader>
              <Title>
                <Name>{item.Title} </Name>
                <Year>({item.Year})</Year>
              </Title>
              <TextSmall>
                <span>{item.Runtime}</span>
                <span> | </span>
                <span>{item.Genre}</span>
                <span> | </span>
                <span>{item.Released}</span>
              </TextSmall>
              <LineRateImdb>
                <strong>{item.imdbRating}</strong>
                <MetascoreContainer>
                  <MetascoreLabel>
                    {item.Metascore}
                  </MetascoreLabel>
                  <span> Metascore</span>
                </MetascoreContainer>
              </LineRateImdb>
            </Header>
            <Container>
              <Cover>
                <img style={{width: '100%', objectFit: 'cover', objectPosition: 'center'}} src={item.Poster}/>
              </Cover>
              <Description>
                <Plot>{item.Plot}</Plot>
                <div>
                  <p>
                    <strong>Directors: </strong>
                    <span>{item.Director}</span>
                  </p>
                  <p>
                    <strong>Writer: </strong>
                    <span>{item.Writer}</span>
                  </p>
                  <p>
                    <strong>Actors: </strong>
                    <span>{item.Actors}</span>
                  </p>
                </div>
              </Description>
            </Container>
          </Page>
          <Awards>
            <p style={{marginLeft: '10px'}}>
              <strong>{item.Awards}</strong>
            </p>
            <p style={{marginLeft: '10px'}}>{item.Language} | {item.Country} | {item.Production}</p>
          </Awards>
        </RootSecond>
          :
          <NotFound message={item.Error}/>
        }
      </Root>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieItem: (id) => dispatch(getMovieItem(id)),
    moviesList: (movie) => dispatch(getMoviesList(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);