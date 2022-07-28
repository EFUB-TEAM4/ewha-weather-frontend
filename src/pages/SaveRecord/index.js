/* eslint-disable import/no-unresolved */
import React, { useState, useContext, useEffect } from 'react';
import { GetDetailCalendars, EditCalendars } from 'apis/Calendar.apis';
import {
  useNavigate,
  useParams,
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
  ButtonBox,
  TemBox,
  Temperature,
  VerticalLine,
  Bear,
} from './style';

function SaveRecord() {
  const navigate = useNavigate();
  const params = useParams();
  const date = new Date(params.date);
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
    const response = await GetDetailCalendars(
      moment(date).format('YYYYMMDD'),
      '76fecba0-3698-4f0f-b74c-bc6650d85921',
    );
    setData(response[0]);
    setIcon(response[0].iconResponseUrlDto.iconUrl);
    setInput(response[0].description);
    setIsFinish(1);
  };
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
          <DateText>{moment(date).format('YYYY년 MM월 DD일')}</DateText>
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
              <Temperature isSmall={1}>강수확률: 0%</Temperature>
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
              <Temperature isSmall={1}>강수확률: 0%</Temperature>
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
        <ButtonBox>
          {isEditMode ? (
            <PublicButton
              text="저장하기"
              isDisabled={0}
              onClick={() => {
                EditCalendars();
                setIsEditMode(0);
              }}
            />
          ) : null}
        </ButtonBox>
      </MainBox>
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
            setIsSaveVisible(0);
            setIsEditMode(0);
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
          onClick2={() => setIsDeleteVisible(0)}
        />
      ) : null}
    </StyledRoot>
  );
}

export default SaveRecord;
