import React from 'react';
import styled from 'styled-components';

const CheckboxShell = ({ children }) => {
  return <StyledTooltip>{children}</StyledTooltip>;
};

const StyledTooltip = styled.div`
  position: absolute;
  top: 35px;
  left: -120px;
  min-width: 360px;
  min-height: 150px;
  background: rgb(255, 255, 255);
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
  font-size: ${({ theme }) => theme.middleGray};
  text-align: left;
  line-height: 1.5em;
  z-index: 100;
  margin-right: 100px;
`;
export default CheckboxShell;
