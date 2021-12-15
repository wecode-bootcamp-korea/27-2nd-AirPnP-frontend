import React, { useState } from 'react';
import CheckboxShell from '../CheckboxShell/CheckboxShell';
import Checkbox from '../Checkbox/Checkbox';
import styled from 'styled-components';

const CheckboxWrap = ({ value, selectedTalent, filterList }) => {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <TalentTypeWrap>
      {selectedTalent === value && (
        <CheckboxShell>
          <OptionWrapper>
            {CheckboxWrapData.map(talent => (
              <Checkbox
                key={talent.id}
                talent={talent}
                setSelectedCategory={setSelectedCategory}
                filterList={filterList}
              />
            ))}
          </OptionWrapper>
          <Selection />
        </CheckboxShell>
      )}
    </TalentTypeWrap>
  );
};

const TalentTypeWrap = styled.section`
  position: relative;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  padding: 20px;
`;

const Selection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 65px;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.middleGray};
`;

export default CheckboxWrap;

const CheckboxWrapData = [
  { id: 1, category: '운동', info: 'PT/배드민턴/조깅/테니스 등을 찾습니다.' },
  {
    id: 2,
    category: '음악',
    info: '작곡/작사/보컬레슨/장르 등을 찾습니다.',
  },
  {
    id: 3,
    category: '청소',
    info: '입주청소/시공/사무실청소 등을 찾습니다.',
  },
  {
    id: 4,
    category: '자기계발',
    info: '책읽기/문화/음악감상/친목 등을 찾습니다.',
  },
  {
    id: 5,
    category: '미술',
    info: '만화/회화/전시/설치미술 등을 찾습니다.',
  },
];
