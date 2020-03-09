import styled from 'styled-components';

const Label = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  `;

const Container = styled.p`
  order: 3;
  word-break: break-all;
  width: 100%;
  text-align: center;
  overflow-y: auto;
  white-space: nowrap;
  flex: 1 1 1;
  `;
export { Label, Container };
