import { background } from '../../util/colors';
import styled from 'styled-components';

const Container = styled.div`
    order: 1;
    flex-direction: row;
    display: flex;
    align-items: center;
    background-color: ${background};
    flex: 1 1 1;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const LogoHeader = styled.div`
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 1%;
`;
const SearchHeader = styled.div`
    width: 100%;
    padding-right: 10px;
`;
export { Container, LogoHeader, SearchHeader };
