import React from 'react';
import styled from 'styled-components';

const ListCard = ({ value, description, adjustHostInfo, hostInfoList }) => {
  return (
    <CardWapper
      className={hostInfoList.category === value && 'selected'}
      onClick={() => {
        adjustHostInfo('category', value);
      }}
    >
      <CardName>{value}</CardName>
      {description && (
        <CardDescription>운동을 잘하는 사람입니다</CardDescription>
      )}
    </CardWapper>
  );
};

export default ListCard;

const CardWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
  margin-bottom: 20px;
  width: 100%;
  height: 60px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.lightGray} inset;
  border-radius: 12px;

  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.black} inset;
  }

  &.selected {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.black} inset;
  }
`;

const CardName = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

const CardDescription = styled.p`
  margin-top: 6px;
  font-size: 12px;
`;
