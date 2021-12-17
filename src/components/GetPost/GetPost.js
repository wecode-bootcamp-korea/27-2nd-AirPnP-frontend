import React from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

function GetPost({ adjustHostInfo, closePopup }) {
  const handdlePost = data => {
    const address = [data.sido, data.sigungu, data.bname].join(' ');
    const detailAddress = data.roadAddress.split(' ');
    adjustHostInfo('address', address);
    adjustHostInfo(
      'local_description',
      [detailAddress[2], detailAddress[3]].join(' ')
    );
    closePopup();
  };

  return (
    <BackGround onClick={closePopup}>
      <ModalWrapper>
        <DaumPostcode onComplete={handdlePost} />
      </ModalWrapper>
    </BackGround>
  );
}

export default GetPost;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  padding: 16px;
  background: white;
  border-radius: 16px;
  text-align: center;
`;
