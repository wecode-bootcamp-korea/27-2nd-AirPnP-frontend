import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

const HostRegisterEnd = () => {
  return (
    <RegisterEndContainer>
      <GuideTextContainer>
        <GuideText>호스트 등록이</GuideText>
        <GuideText>완료되었습니다</GuideText>
      </GuideTextContainer>
      <RegisterButtonContainer>
        <Link to="/">
          <HostRegisterButton>돌아가기</HostRegisterButton>
        </Link>
      </RegisterButtonContainer>
    </RegisterEndContainer>
  );
};

export default HostRegisterEnd;

const RegisterEndContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  width: 100%;
  height: 90vh;
  background: linear-gradient(150deg, ${({ theme }) => theme.highlight}, red);
`;

const GuideTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GuideText = styled.h1`
  font-weight: 700;
  font-size: 48px;
  color: white;
`;

const RegisterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const HostRegisterButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.highlight};
  color: white;
  transition: all 0.2;

  &:active {
    margin-right: 3px;
    width: 175px;
    height: 48px;
    background-color: ${lighten(0.05, '#5c7ecb')};
  }
`;
