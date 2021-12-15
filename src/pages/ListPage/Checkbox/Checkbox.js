import React from 'react';
import styled from 'styled-components';

const TalentOption = ({ talent, filterList }) => {
  return (
    <Option>
      <Input
        type="radio"
        name="category"
        value={talent.category}
        onChange={() => filterList(talent.category)}
      />
      <Label>
        <Type>{talent.category}</Type>
        <div>{talent.info}</div>
      </Label>
    </Option>
  );
};

const Option = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Label = styled.label`
  width: 272px;
`;

const Type = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
export default TalentOption;
