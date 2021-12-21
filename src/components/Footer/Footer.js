import React from 'react';
import styled from 'styled-components';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImInstagram } from 'react-icons/im';

function Footer() {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterTopBox>
          <FooterAirPnP>에어피앤피</FooterAirPnP>
          <FooterIntro>
            <BoxTitle>Front-end</BoxTitle>
            <BoxName>길도연 · 김혜리 · 이나은</BoxName>
            <BoxTitle>Back-end</BoxTitle>
            <BoxName>김은혜 · 염기욱 · 이주명</BoxName>
          </FooterIntro>
        </FooterTopBox>
      </FooterTop>
      <FooterBottom>
        <FooterBottomLetter>
          © 2021 AirPnP, Inc&nbsp; · &nbsp;개인정보 처리방침&nbsp; ·
          &nbsp;이용약관&nbsp; · &nbsp;사이트맵&nbsp; · &nbsp;회사
          세부정보&nbsp;&nbsp;·&nbsp;&nbsp;한국어 (KR)&nbsp;&nbsp;
          <FaFacebookF />
          &nbsp;&nbsp;
          <AiOutlineTwitter />
          &nbsp;&nbsp;
          <ImInstagram />
        </FooterBottomLetter>
      </FooterBottom>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: ${props => props.theme.lightGray};
`;
const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 70%;
`;
const FooterTopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 80%;
  margin-left: 15px;
`;
const FooterAirPnP = styled.span`
  margin-top: 20px;
  color: ${props => props.theme.darkGray};
  font-size: 13px;
`;
const FooterIntro = styled.div`
  display: flex;
`;
const BoxTitle = styled.span`
  width: 100px;
  margin-top: 25px;
  color: ${props => props.theme.darkGray};
  font-size: 15px;
`;
const BoxName = styled.span`
  width: 200px;
  margin-top: 25px;
  color: ${props => props.theme.darkGray};
  font-size: 15px;
`;
const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 20%;
  border-top: ${props => props.theme.borderMiddleGray};
  text-align: center;
`;
const FooterBottomLetter = styled.span`
  width: 90%;
  margin: 10px 15px 0 0;
  color: ${props => props.theme.darkGray};
  font-size: 13px;
  letter-spacing: 0.5px;
`;
export default Footer;
