import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { lighten } from 'polished';

const HostRegisterStart = () => {
  const navigate = useNavigate();

  return (
    <RegisterStart>
      <BeHost>에어피앤피의 호스트가 되보세요!</BeHost>
      <RegisterButtonContainer>
        <HostRegisterButton
          onClick={() =>
            navigate('/host-register/register-process/category-type')
          }
        >
          호스팅 시작하기
        </HostRegisterButton>
      </RegisterButtonContainer>
    </RegisterStart>
  );
};

export default HostRegisterStart;

const RegisterStart = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  background-color: ${({ theme }) => theme.black};
`;

const BeHost = styled.div`
  margin-bottom: 30px;
  font-size: 3rem;
  color: ${({ theme }) => theme.white};
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
    width: 175px;
    height: 48px;
    background-color: ${lighten(0.05, '#5c7ecb')};
  }
`;
