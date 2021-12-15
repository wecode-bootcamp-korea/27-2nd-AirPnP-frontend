import React, { useState } from 'react';
import styled from 'styled-components';
import CheckboxWrap from '../CheckboxWrap/CheckboxWrap';
import { MdKeyboardArrowDown } from 'react-icons/md';

function LeftKeywordButton({ filterList }) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ButtonBox>
      <HeaderButton onClick={openModal}>
        <TextArrowBox>
          <HeaderButtonText>재능유형</HeaderButtonText>
          <MdKeyboardArrowDown className="arrow" />
        </TextArrowBox>
      </HeaderButton>
      {modalVisible && (
        <CheckboxWrap
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClick={openModal}
          filterList={filterList}
        />
      )}
    </ButtonBox>
  );
}

LeftKeywordButton.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const HeaderButton = styled.button`
  position: relative;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  padding: 10px 16px;
  cursor: pointer;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.lightGray};
  background-color: ${({ theme }) => theme.white};
  outline: none;
  margin: 0px;
  border-radius: 30px;
  color: ${({ theme }) => theme.black};
  font-size: 12px;
  line-height: 16px;
  margin-right: 8px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.black};
  }
`;

const HeaderButtonText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

const TextArrowBox = styled.div`
  display: flex;
  align-items: center;
  .arrow {
    width: 20px;
    height: 20px;
  }
`;

export default LeftKeywordButton;
