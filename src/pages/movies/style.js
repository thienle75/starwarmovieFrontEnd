import styled from 'styled-components';
import { secondGray, white } from '../../util/colors';

const Container = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    background: ${white}
    flex-flow: column wrap;
    justify-content: center;
`;
const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${secondGray}
`;
const Body = styled.div`
    order: 2;
    flex: 1 1 0;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;


export { Container, Body, Root };

