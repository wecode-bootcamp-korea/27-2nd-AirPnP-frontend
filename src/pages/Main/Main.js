import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <MainWrapper>
      <MainContainer>
        <MainImg alt="main-image" src="image/Main/airpnp-main.jpg" />
        <MainHeader>에어피앤피가 당신이 필요한 분을 찾아드릴게요!</MainHeader>
      </MainContainer>
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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainImg = styled.img`
  position: relative;
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
  color: white;
  font-size: 45px;
`;

export default Main;
