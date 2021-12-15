import React from 'react';
import styled from 'styled-components';
import { RIGHT_KEYWORD_LIST } from './RightKeywordData';

function KeywordButton() {
  return (
    <ButtonBox>
      {RIGHT_KEYWORD_LIST.map(tagKeyword => {
        return (
          <HeaderButton key={tagKeyword.id}>
            <TextArrowBox>
              <HeaderButtonText>{tagKeyword.keyword}</HeaderButtonText>
            </TextArrowBox>
          </HeaderButton>
        );
      })}
    </ButtonBox>
  );
}

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
export default KeywordButton;
