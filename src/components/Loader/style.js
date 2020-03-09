import styled, { keyframes } from 'styled-components';
import { gray } from './../../util/colors';

const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 99999;
    background: ${gray};
    width: 100%;
    height: 100%;
    visibility: ${props => (props.isShow ? 'hidden' : 'visible')}
`;

const spinAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
const Loader = styled.div`
    position: absolute;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spinAnimation} 2s linear infinite;
`;

export { Loader, Container };
