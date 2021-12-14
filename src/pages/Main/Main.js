import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <MainWrapper>
      <MainImg alt="main-image" src="image/Main/airpnp-main.jpg" />
      <MainHeader>에어피앤피가 당신이 필요한 분을 찾아드릴게요!</MainHeader>
      <MainButton>유연한 검색</MainButton>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const MainImg = styled.img`
  position: relative;
  width: 80%;
`;

const MainHeader = styled.h1`
  position: absolute;
  bottom: 250px;
  color: white;
  font-size: 50px;
`;

const MainButton = styled.button`
  position: absolute;
  bottom: 100px;
  width: 180px;
  height: 70px;
  border: none;
  border-radius: 100px;
  background-color: white;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${props => props.theme.highlight};
`;
export default Main;
