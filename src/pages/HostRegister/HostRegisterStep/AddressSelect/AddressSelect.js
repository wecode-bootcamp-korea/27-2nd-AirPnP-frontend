import React from 'react';
import styled from 'styled-components';
import GetPost from '../../../../components/GetPost/GetPost';
import useAddressSelect from './useAddressSelect';

function AddressSelect({ hostInfoList, adjustHostInfo }) {
  const { isPopup, setIsPopup, changeLocalDescription, closePopup } =
    useAddressSelect(adjustHostInfo);

  return (
    <AddressWrapper>
      <AddressInputContainer>
        <Address>
          {!!hostInfoList.address
            ? hostInfoList.address
            : '활동지역을 선택하세요'}
        </Address>
        <RegisterButtonContainer>
          <AddressSearchButton onClick={() => setIsPopup(true)}>
            활동범위 선택
          </AddressSearchButton>
        </RegisterButtonContainer>
        {isPopup && (
          <GetPost adjustHostInfo={adjustHostInfo} closePopup={closePopup} />
        )}

        <DetailAddressInfo>
          상세 주소 입력
          <DetailAddressInput
            onChange={changeLocalDescription}
            value={hostInfoList.local_description}
          />
        </DetailAddressInfo>
      </AddressInputContainer>
    </AddressWrapper>
  );
}

export default AddressSelect;

const AddressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  -ms-overflow-style: none;
  padding: 60px 0 10px;
  width: 100%;
  height: 86%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AddressInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Address = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

const DetailAddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-top: 30px;
  font-size: 14px;
`;

const DetailAddressInput = styled.input`
  padding: 8px 20px;
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.lightGray} inset;
  text-align: center;

  &:focus {
    border: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.lightGray} inset;
  }
`;

const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
`;

const AddressSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: black;
  border: none;
  font-size: 10px;
  color: white;

  &:active {
    padding: 7px 14px;
    margin: 2px;
    font-size: 8px;
  }
`;
