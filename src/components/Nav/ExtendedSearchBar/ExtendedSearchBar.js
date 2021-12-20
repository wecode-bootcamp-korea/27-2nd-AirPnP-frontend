import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { BiSearch } from 'react-icons/bi';
import { ko } from 'date-fns/esm/locale';
import CustomInput from './CustomInput/CustomInput';
import AutoCompleteInput from './AutoCompleteInput/AutoCompleteInput';
import './datepicker.scss';

const ExtendedSearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [dateInput, setDateInput] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [isAutoCompleteOpen, setIsAutoCompleteOpen] = useState(false);
  const categoryInputRef = useRef();

  const adjustDate = (type, date) => {
    setDateInput(prevDate => ({ ...prevDate, [type]: date }));
  };

  const changeSearchInput = e => {
    setSearchInput(() => e.target.value);
  };

  return (
    <SearchPannel>
      <PannelButton onClick={() => categoryInputRef.current.focus()}>
        <ButtonName>재능</ButtonName>
        <CategoryInput
          value={searchInput}
          type="text"
          placeholder="어떤 재능을 찾으시나요?"
          onChange={changeSearchInput}
          ref={categoryInputRef}
          onFocus={() => setIsAutoCompleteOpen(true)}
          onBlur={() =>
            setTimeout(() => {
              setIsAutoCompleteOpen(false);
            }, 100)
          }
        />
      </PannelButton>
      {isAutoCompleteOpen && (
        <AutoCompleteInput
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      )}
      <DatePicker
        selected={dateInput.startDate}
        startDate={dateInput.startDate}
        endDate={dateInput.endDate}
        minDate={new Date()}
        dateFormat={DATE_FORMAT}
        dateFormatCalendar={DATE_FORMAT_CALENDAR}
        onChange={date => adjustDate(START_DATE_TYPE, date)}
        locale={ko}
        customInput={<CustomInput inputType="startDate" />}
      />
      <DatePicker
        selected={dateInput.endDate}
        startDate={dateInput.startDate}
        endDate={dateInput.endDate}
        minDate={dateInput.startDate}
        dateFormat={DATE_FORMAT}
        dateFormatCalendar={DATE_FORMAT_CALENDAR}
        onChange={date => adjustDate(END_DATE_TYPE, date)}
        locale={ko}
        customInput={<CustomInput inputType="endDate" />}
      />
      <SearchClick>
        <BiSearch />
      </SearchClick>
    </SearchPannel>
  );
};

const START_DATE_TYPE = 'startDate';
const END_DATE_TYPE = 'endDate';
const DATE_FORMAT = 'yyyy년 MM월 dd일';
const DATE_FORMAT_CALENDAR = 'yyyy년 MM월';

const SearchPannel = styled.form`
  position: absolute;
  display: flex;
  align-items: center;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 45px;
`;

const PannelButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 30px;
  margin-right: 2px;
  border-radius: 50px;
  border-color: transparent;
  background-color: white;
  transition: 0.4s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.middleGray};
  }
`;

const SearchClick = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 16px;
  border-radius: 50px;
  border-color: transparent;
  width: auto;
  background-color: ${({ theme }) => theme.highlight};
  font-size: 24px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

const ButtonName = styled.p`
  margin: 0 0 4px 2px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

const CategoryInput = styled.input`
  min-width: 200px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export default ExtendedSearchBar;
