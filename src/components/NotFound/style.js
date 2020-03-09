import styled from 'styled-components';
import { primaryColor } from './../../util/colors';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  flex-row: row wrap;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 150%;
  font-weight: bold;
  margin: 0;
  color: ${primaryColor}
   @media only screen and (min-width: 600px) {
      font-size: 250%;
  }
  @media only screen and (min-width: 768px) {
      font-size: 350%;
  }
  `;
export const Description = styled.div`
  border: 10px solid;
  padding: 10px;
  text-align: center;
  `;

