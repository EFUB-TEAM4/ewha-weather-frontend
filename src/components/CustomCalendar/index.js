/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { GetCalendars } from 'apis/Calendar.apis';
import { NavLink } from 'react-router-dom';
import Calendar from 'react-calendar';
import moment from 'moment';
import { StyledRoot, CalendarContainer, Image } from './style';

function CustomCalendar() {
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState([]);
  /* eslint-disable-next-line */
  const [mark, setMark] = useState([]);
  const getData = async () => {
    const response = await GetCalendars('76fecba0-3698-4f0f-b74c-bc6650d85921');
    setData(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <StyledRoot>
      <CalendarContainer>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(
            view, // eslint-disable-line no-unused-vars
            date,
          ) => date.toLocaleString('en', { day: 'numeric' })}
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
          tileClassName={({ date }) => {
            if (mark.find(x => x === moment(date).format('YYYYMMDD'))) {
              return 'highlight';
            }
            return null;
          }}
          /* eslint-disable */
          tileContent={({ date, view }) => {
            const html = [];
            if (
              data.find(x => x.forecastDate === moment(date).format('YYYYMMDD'))
            ) {
              const icon = data.find(
                x => x.forecastDate === moment(date).format('YYYYMMDD'),
              );
              html.push(
                <NavLink key={0} to={`/MyPage/save/${date}`}>
                  <Image src={icon.iconResponseUrlDto.iconUrl} alt="record" />
                </NavLink>,
              );
            }
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '40px',
                }}
              >
                {html}
              </div>
            );
          }}
        />
      </CalendarContainer>
    </StyledRoot>
  );
}

export default CustomCalendar;
