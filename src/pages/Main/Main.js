import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <MainWrapper>
      <MainContent>
        <MainImg alt="main-image" src="image/Main/airpnp-main.jpg" />
        <MainHeader>에어피앤피가 당신이 필요한 분을 찾아드릴게요!</MainHeader>
        <MainButton>유연한 검색</MainButton>
      </MainContent>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
`;

const MainImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100vh;
  object-fit: cover;
`;

const MainHeader = styled.h1`
  display: flex;
  align-items: center;
  position: absolute;
  width: 50vw;
  bottom: 250px;
  width: 50vw;
  color: white;
  text-align: center;
  font-size: 50px;
  object-fit: cover;
`;

const MainButton = styled.button`
  position: absolute;
  bottom: 100px;
  width: 180px;
  height: 70px;
  border: none;
  border-radius: 100px;
  background-color: white;
  margin-right: 10px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${props => props.theme.highlight};
`;

export default Main;
