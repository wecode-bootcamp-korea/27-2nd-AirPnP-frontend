import React, { forwardRef } from 'react';
import styled from 'styled-components';

const CustomInput = forwardRef(({ value, onClick, inputType }) => {
  return (
    <PannelButton onClick={onClick}>
      <ButtonName>{inputType === 'end' ? '끝' : '시작'}</ButtonName>
      <SelectedDate>{value}</SelectedDate>
    </PannelButton>
  );
});

const PannelButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 30px;
  margin-right: 10px;
  border-radius: 50px;
  border-color: transparent;
  background-color: white;
  transition: 0.4s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.middleGray};
  }
`;

const ButtonName = styled.p`
  margin: 0 0 4px 2px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

const SelectedDate = styled.div`
  min-width: 110px;
  font-size: 14px;
  color: ${({ theme }) => theme.black};
`;

export default CustomInput;
