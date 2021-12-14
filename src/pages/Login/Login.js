import React from 'react';
import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';
import API_CONFIG from '../../config';

const { Kakao } = window;

function Login({ modalClose }) {
  const kakaoLoginClickHandler = () => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_API_KEY);
    }

    Kakao.Auth.loginForm({
      success: function (authObj) {
        fetch(`${API_CONFIG.SIGNIN}`, {
          method: 'POST',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (!localStorage.token) {
              localStorage.setItem('token', res.token);
              if (res.token) {
                alert('airpnp 에 오신걸 환영합니다.');
                modalClose();
              }
            } else {
              alert('이미 로그인 되어 있습니다.');
              modalClose();
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <WrapPane>
      <LoginSection>
        <ModalContainer>
          <WrapModal>
            <CloseIcon
              src="/images/Login/x-mark.png"
              alt="closeButton"
              onClick={modalClose}
            />
          </WrapModal>
          <LoginHeader>
            <WrapHeaderText>
              <HeaderText>로그인 또는 회원 가입</HeaderText>
            </WrapHeaderText>
          </LoginHeader>
          <WrapContentBox>
            <LoginPane>
              <WrapWelcomeText>
                <PnpLogo src="/images/Login/airpnp-Logo.png" alt="airpnpLogo" />
                <WelcomeText>에 오신 것을 환영합니다.</WelcomeText>
              </WrapWelcomeText>
              <WrapSocialButton>
                <LoginButton>
                  <div onClick={kakaoLoginClickHandler}>
                    <SocialButton>
                      <RiKakaoTalkFill className="kakaoLogo" />
                      <KakaoLogin>카카오톡으로 로그인하기</KakaoLogin>
                    </SocialButton>
                  </div>
                </LoginButton>
              </WrapSocialButton>
            </LoginPane>
          </WrapContentBox>
        </ModalContainer>
      </LoginSection>
    </WrapPane>
  );
}

const WrapPane = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 0;
`;

const LoginSection = styled.section`
  z-index: 2000;
  position: fixed;
  inset: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-align: center;
  padding: 40px;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 568px;
  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  position: relative;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 28%) 0px 8px 28px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const WrapModal = styled.div`
  top: 18px;
  position: absolute;
  display: flex;
  left: 24px;
  z-index: 1;
`;

const CloseIcon = styled.img`
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: ${({ theme }) => theme.black};
  cursor: pointer;
`;

const LoginHeader = styled.header`
  min-height: 64px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  padding: 0px 24px;
  min-height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  color: ${({ theme }) => theme.black};
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
`;

const WrapHeaderText = styled.div`
  flex: 0;
  overflow: hidden;
  flex: 0 1 auto;
  text-align: center;
  margin: 0 auto;
`;

const HeaderText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WrapContentBox = styled.div`
  padding: 24px;
  flex: 1 1 auto;
  overflow-y: auto;
  outline: none;
`;

const LoginPane = styled.div`
  box-sizing: border-box;
`;

const WrapWelcomeText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const PnpLogo = styled.img`
  display: block;
  width: 180px;
`;

const WelcomeText = styled.h3`
  font-size: 22px;
  line-height: 26px;
  color: ${({ theme }) => theme.black};
  font-weight: 600;
  margin: 10px 0 0 5px;
`;

const WrapSocialButton = styled.div`
  display: block;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LoginButton = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const SocialButton = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  padding: 10px 12px;
  font-weight: 800;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.lightGray};
  background: #f7e600;
  box-shadow: none;
  min-width: 72px;
  width: 100%;
  display: flex;

  .kakaoLogo {
    width: 24px;
    height: 24px;
  }
`;

const KakaoLogin = styled.div`
  flex: 1 1 0%;
  font-weight: 600;
  font-size: 14px;
`;

export default Login;
