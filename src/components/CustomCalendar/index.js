/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Calendar from 'react-calendar';
import moment from 'moment';
import { CalMoonCloud } from 'assets';
import { StyledRoot, CalendarContainer, Image } from './style';

function CustomCalendar() {
  const [value, onChange] = useState(new Date());
  const mark = ['2022-07-07', '2022-07-10'];
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
            if (mark.find(x => x === moment(date).format('YYYY-MM-DD'))) {
              return 'highlight';
            }
            return null;
          }}
          /* eslint-disable */
          tileContent={({ date, view }) => {
            const html = [];
            if (mark.find(x => x === moment(date).format('YYYY-MM-DD'))) {
              html.push(
                <NavLink key={0} to={`/MyPage/save/${date}`}>
                  <Image src={CalMoonCloud} alt="record" />
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
