import React from 'react';
import styled from 'styled-components';
import ListCard from '../ListCard/ListCard';
import { TALENT_LIST } from './TalentList';

const CategorySelect = ({ adjustHostInfo, hostInfoList }) => {
  return (
    <CategoryList>
      {TALENT_LIST.map(({ id, category }) => (
        <ListCard
          key={id}
          value={category}
          adjustHostInfo={adjustHostInfo}
          hostInfoList={hostInfoList}
        />
      ))}
    </CategoryList>
  );
};

export default CategorySelect;

const CategoryList = styled.form`
  -ms-overflow-style: none;
  padding: 50px 0 10px;
  width: 100%;
  height: 86%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
