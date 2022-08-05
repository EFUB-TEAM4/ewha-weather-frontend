/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { GetCalendars } from 'apis/Calendar.apis';
import currentUser from 'apis/User.apis';
import { usePrivateAxios } from 'hooks';
import { NavLink } from 'react-router-dom';
import Calendar from 'react-calendar';
import moment from 'moment';
import { StyledRoot, CalendarContainer, Image } from './style';

function CustomCalendar() {
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState([]);
  const [mark, setMark] = useState([]);
  const privateAxios = usePrivateAxios();
  const getData = async () => {
    const responseId = await currentUser(privateAxios);
    const response = await GetCalendars(responseId.id);
    setData(response.body.calendar);
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
            const list = data.filter(
              x => x.forecastDate === moment(date).format('YYYYMMDD'),
            );
            list.map((x, i) =>
              html.push(
                <NavLink key={i} to={`/MyPage/save`} state={{ id: x.id }}>
                  <Image src={x.iconResponseUrlDto.iconUrl} alt="record" />
                </NavLink>,
              ),
            );
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
