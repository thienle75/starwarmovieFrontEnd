import styled from 'styled-components';
import { grayTransparent, primaryColor } from './../../util/colors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 30%;
  width: 100%;
  height: 100%;
  grid-gap: 10px;
  justify-items: center;
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Item = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    border: 1px solid ${primaryColor};
  }
  
  
  `;
const MovieCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Description = styled.div`
  position: absolute;
  color: black;
  font-weight: bold;
  font-size: large;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  opacity: 0;
  &:hover {
    background: ${grayTransparent};
    opacity: 1;
  }
`;

const Text = styled.p`
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
  text-align: center;
`;

export { Container, Item, Description, MovieCover, Text };
