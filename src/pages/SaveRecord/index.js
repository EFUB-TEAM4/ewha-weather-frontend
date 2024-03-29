/* eslint-disable import/no-unresolved */
import React, { useState, useContext, useEffect } from 'react';
import {
  GetDetailCalendars,
  EditCalendars,
  DeleteCalendars,
} from 'apis/Calendar.apis';
import { usePrivateAxios } from 'hooks';
import {
  useNavigate,
  useLocation,
  UNSAFE_NavigationContext as NavigationContext,
} from 'react-router-dom';
import moment from 'moment';
import { WhiteLeft, NormalPencil, OutlinePencil, NormalTrash } from 'assets';
// eslint-disable-next-line
import { HeaderIcon, PublicButton, EditModal, BearAvater } from 'components';
import {
  StyledRoot,
  HeaderIconBox,
  SubText,
  MainText,
  BackButton,
  Text,
  MainBox,
  MainHeaderBox,
  DateText,
  HorizonLine,
  HorizonLineBottom,
  DeskTopWeatherBox,
  MobileWeatherBox,
  ContentBox,
  RecordBox,
  DeskTopButtonBox,
  MobileButtonBox,
  TemBox,
  Temperature,
  VerticalLine,
  Bear,
} from './style';

function SaveRecord() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isEditMode, setIsEditMode] = useState(0);
  const [isSaveVisible, setIsSaveVisible] = useState(0);
  const [isDeleteVisible, setIsDeleteVisible] = useState(0);
  // eslint-disable-next-line
  const [data, setData] = useState([]);
  const [icon, setIcon] = useState('');
  const [input, setInput] = useState('');
  const [isFinish, setIsFinish] = useState(0);
  const onChange = e => setInput(e.target.value);
  function useBlocker(when = true) {
    const { navigator } = useContext(NavigationContext);
    useEffect(() => {
      if (!when) return;

      const unblock = navigator.block(() => {
        setIsSaveVisible(1);
      });
      // eslint-disable-next-line
      return unblock;
    }, [navigator, when]);
  }
  function usePrompt(when = true) {
    useBlocker(when);
  }
  usePrompt(isEditMode);
  const getData = async () => {
    const response = await GetDetailCalendars(location.state.id);
    setData(response.body.calender);
    setIcon(response.body.calender.iconResponseUrlDto.iconUrl);
    setInput(response.body.calender.description);
    setIsFinish(1);
  };
  const privateAxios = usePrivateAxios();
  useEffect(() => {
    getData();
  }, []);
  const bearimage = isFinish ? (
    <BearAvater
      showOptions={false}
      avater={{
        skyResponseDto: { skyName: data.skyResponseDtoWithUrl.skyName },
        ptyResponseDto: { ptyName: data.ptyResponseDtoWithUrl.ptyName },
        bearResponseDto: { clothName: data.bearResponseDto.clothName },
        seasonResponseDto: { seasonName: data.seasonResponseDto.seasonName },
      }}
    />
  ) : null;
  return (
    <StyledRoot>
      <HeaderIconBox>
        <HeaderIcon />
      </HeaderIconBox>
      <Text>
        <button
          className="backbutton"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <BackButton src={WhiteLeft} alt="BackButton" />
        </button>
        <SubText className="subText">내년의 나를 위해 남기는</SubText>
        <MainText>하루 날씨 기록</MainText>
      </Text>
      <MainBox className="mainbox">
        <MainHeaderBox>
          <DateText>
            {moment(data.forecastDate).format('YYYY년 MM월 DD일')}
          </DateText>
          <div className="IconBox">
            <button type="button" onClick={() => setIsEditMode(1)}>
              {isEditMode ? (
                <img src={OutlinePencil} alt="edit" />
              ) : (
                <img src={NormalPencil} alt="edit" />
              )}
            </button>
            <button type="button" onClick={() => setIsDeleteVisible(1)}>
              <img src={NormalTrash} alt="delete" />
            </button>
          </div>
        </MainHeaderBox>
        <HorizonLine width="100%" />
        <ContentBox>
          <MobileWeatherBox>
            <img className="iconimg" src={icon} alt="WeatherIcon" />
            <TemBox>
              <Temperature isSmall={0}>{data.currentTemperature}</Temperature>
              <Temperature isSmall={1}>°C</Temperature>
            </TemBox>
            <VerticalLine />
            <div className="div">
              <Temperature isSmall={1}>
                최고: {data.maxTemperature}° / 최저: {data.minTemperature}°
              </Temperature>
              <Temperature isSmall={1}>
                강수확률: {data.rainfallPercentage}%
              </Temperature>
            </div>
          </MobileWeatherBox>
          <Bear>{bearimage}</Bear>
          <RecordBox>
            <DeskTopWeatherBox>
              <img className="iconimg" src={icon} alt="WeatherIcon" />
              <TemBox>
                <Temperature isSmall={0}>{data.currentTemperature}</Temperature>
                <Temperature isSmall={1}>°C</Temperature>
              </TemBox>
              <VerticalLine />
              <Temperature isSmall={1}>
                최고: {data.maxTemperature}° / 최저: {data.minTemperature}°
              </Temperature>
              <Temperature isSmall={1}>
                강수확률: {data.rainfallPercentage}%
              </Temperature>
            </DeskTopWeatherBox>
            <HorizonLine width="100%" isShorter={1} />
            <textarea
              placeholder="내년의 나를 위해, 오늘 하루의 날씨 기록을 남겨보세요."
              value={input}
              onChange={onChange}
              disabled={!isEditMode}
            />
            <HorizonLineBottom width="100%" />
          </RecordBox>
        </ContentBox>
        <DeskTopButtonBox>
          {isEditMode ? (
            <PublicButton
              text="저장하기"
              isDisabled={0}
              onClick={() => {
                EditCalendars(privateAxios, data.id, input);
                setIsEditMode(0);
              }}
            />
          ) : null}
        </DeskTopButtonBox>
      </MainBox>
      <MobileButtonBox>
        {isEditMode ? (
          <PublicButton
            text="저장하기"
            isDisabled={0}
            onClick={() => {
              EditCalendars(privateAxios, data.id, input);
              setIsEditMode(0);
            }}
          />
        ) : null}
      </MobileButtonBox>
      {isSaveVisible ? (
        <EditModal
          ctext1="아직 기록이 저장되지 않았어요."
          ctext2="기록을 저장하실래요?"
          btext1="나가기"
          btext2="저장하기"
          onClick1={() => {
            setIsEditMode(0);
            navigate(-1);
          }}
          onClick2={() => {
            EditCalendars(privateAxios, data.id, input);
            setIsSaveVisible(0);
            setIsEditMode(0);
            navigate(-1);
          }}
        />
      ) : null}
      {isDeleteVisible ? (
        <EditModal
          ctext1="내년의 나를 위한 기록이에요!"
          ctext2="정말로 기록을 삭제하실래요?"
          btext1="취소"
          btext2="삭제하기"
          onClick1={() => setIsDeleteVisible(0)}
          onClick2={() => {
            DeleteCalendars(privateAxios, data.id);
            navigate(-1);
          }}
        />
      ) : null}
    </StyledRoot>
  );
}

export default SaveRecord;
