import React from 'react';
import styled from 'styled-components';

const DetailInfo = ({
  adjustHostInfo,
  hostInfoList: { title, phone_number, career, price, subtitle, description },
}) => {
  const handdleDetailInput = e => {
    const { name, value } = e.target;
    adjustHostInfo(name, value);
  };

  return (
    <DetailInfoWrapper>
      <InputContainer>
        <InputName>제목</InputName>
        <DetailInfoInput
          name="title"
          placeholder="제목"
          value={title}
          onChange={handdleDetailInput}
        />
      </InputContainer>
      <InputContainer>
        <InputName>소제목</InputName>
        <DetailInfoInput
          name="subtitle"
          placeholder="소제목"
          value={subtitle}
          onChange={handdleDetailInput}
        />
      </InputContainer>
      <InputContainer>
        <InputName>전화</InputName>
        <DetailInfoInput
          name="phone_number"
          type="number"
          placeholder="전화"
          value={phone_number}
          onChange={handdleDetailInput}
        />
      </InputContainer>
      <InputContainer>
        <InputName>경력</InputName>
        <DetailInfoInput
          name="career"
          placeholder="경력"
          value={career}
          onChange={handdleDetailInput}
        />
      </InputContainer>
      <InputContainer>
        <InputName>하루 당 가격</InputName>
        <DetailInfoInput
          name="price"
          type="number"
          placeholder="가격"
          value={price}
          onChange={handdleDetailInput}
        />
      </InputContainer>
      <InputContainer>
        <InputName>설명</InputName>
        <DetailInfoTextArea
          name="description"
          placeholder="설명"
          value={description}
          onChange={handdleDetailInput}
        />
      </InputContainer>
    </DetailInfoWrapper>
  );
};

export default DetailInfo;

const DetailInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -ms-overflow-style: none;
  padding: 300px 0 10px;
  width: 100%;
  height: 86%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  margin-bottom: 20px;
`;

const InputName = styled.p`
  padding-left: 10px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.black};
`;

const DetailInfoInput = styled.input`
  padding: 8px 20px;
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #f2f2f2;

  &:focus {
    border: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.lightGray} inset;
  }
`;

const DetailInfoTextArea = styled.textarea`
  padding: 8px 20px;
  margin-top: 20px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  resize: none;
`;
