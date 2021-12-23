import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import CustomInput from './CustomInput/CustomInput';
import { ko } from 'date-fns/esm/locale';
import './datepicker.scss';
import { subDays } from 'date-fns';

const DayPicker = ({ type, dateInput, adjustDate, bookingDate }) => {
  const [bookedData, setBookedData] = useState([]);

  useEffect(() => {
    if (bookingDate) {
      const handdledData = bookingDate.map(({ start_date, end_date }) => ({
        start: subDays(new Date(start_date), 1),
        end: new Date(end_date),
      }));

      setBookedData(handdledData);
    }
  }, [bookingDate]);

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
      excludeDateIntervals={bookedData}
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
