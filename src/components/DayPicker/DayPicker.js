import React from 'react';
import DatePicker from 'react-datepicker';
import CustomInput from './CustomInput/CustomInput';
import { ko } from 'date-fns/esm/locale';
import './datepicker.scss';

const DayPicker = ({ type, dateInput, adjustDate }) => {
  return (
    <DatePicker
      selected={type === 'start' ? dateInput.startDate : dateInput.endDate}
      startDate={dateInput.startDate}
      endDate={dateInput.endDate}
      minDate={type === 'start' ? new Date() : dateInput.startDate}
      dateFormat={DATE_FORMAT}
      dateFormatCalendar={DATE_FORMAT_CALENDAR}
      onChange={date =>
        adjustDate(type === 'start' ? START_DATE_TYPE : END_DATE_TYPE, date)
      }
      locale={ko}
      customInput={<CustomInput inputType={type} />}
    />
  );
};

export default DayPicker;

const START_DATE_TYPE = 'startDate';
const END_DATE_TYPE = 'endDate';
const DATE_FORMAT = 'yyyy년 MM월 dd일';
const DATE_FORMAT_CALENDAR = 'yyyy년 MM월';
