import React from 'react';
import styled from 'styled-components';
import { CATEGORY_LIST } from './CategoryList';

const AutoCompleteInput = ({ searchInput, setSearchInput }) => {
  const filteredList = CATEGORY_LIST.filter(({ name }) =>
    name.includes(searchInput)
  );

  return (
    <AutoComplete>
      {filteredList.map(({ id, name }) => (
        <CompleteList key={id} onClick={() => setSearchInput(name)}>
          {name}
        </CompleteList>
      ))}
    </AutoComplete>
  );
};

export default AutoCompleteInput;

const AutoComplete = styled.div`
  position: absolute;
  top: 82px;
  left: 10px;
  padding: 10px 20px;
  height: 200px;
  width: 180px;
  border-radius: 20px;
  background-color: white;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CompleteList = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
  height: 50px;
  border: none;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  font-size: 14px;
  color: #222;
`;
