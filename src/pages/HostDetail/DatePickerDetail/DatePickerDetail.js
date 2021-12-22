import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import 'react-datePicker/dist/react-datepicker.css';
import styled from 'styled-components';

function DatePickerDetail() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Container>
      <DatePicker
        dateFormat="yyyy년 MM월 dd일"
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        dateFormat="yyyy년 MM월 dd일"
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 130px;

  .react-datepicker__input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;

    input {
      width: 130px;
      height: 30px;
      margin-left: 10px;
      border-radius: 20px;
      border: ${props => props.theme.borderMiddleGray};
      text-align: center;
    }
  }
`;
export default DatePickerDetail;
