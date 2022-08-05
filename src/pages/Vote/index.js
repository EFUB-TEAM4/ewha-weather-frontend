/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostVotes } from 'apis/Vote.apis';
import { usePrivateAxios } from 'hooks';
import { WhiteLeft } from 'assets';
import { HeaderIcon, PublicButton } from 'components';
import {
  StyledRoot,
  HeaderBox,
  HeaderIconBox,
  Text,
  BackButton,
  BackButtonBox,
  SubText,
  MainText,
  ContentBox,
  FormBox,
  SubjectText,
  Form,
  ButtonBox,
} from './style';

function Vote() {
  const privateAxios = usePrivateAxios();

  const navigate = useNavigate();

  const [clothes, setClothes] = useState('');
  const [place, setPlace] = useState('');

  const cChangeHandler = e => {
    setClothes(e.target.value);
  };

  const pChangeHandler = e => {
    setPlace(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <StyledRoot>
      <HeaderBox>
        <HeaderIconBox>
          <HeaderIcon />
        </HeaderIconBox>
        <BackButtonBox>
          <button
            className="backbutton"
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackButton src={WhiteLeft} alt="BackButton" />
          </button>
        </BackButtonBox>
        <Text>
          <SubText>오늘 옷차림이 고민될 땐,</SubText>
          <MainText>벗들에게 물어봐!</MainText>
        </Text>
      </HeaderBox>
      <ContentBox>
        <FormBox>
          <SubjectText>
            오늘 이 옷<span>*</span>
          </SubjectText>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              name="clothes"
              placeholder="입고싶은 옷을 적어주세요"
              required="required"
              value={clothes}
              onChange={cChangeHandler}
            />
          </Form>
        </FormBox>
        <FormBox>
          <SubjectText>어디에서</SubjectText>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              name="place"
              placeholder="옷을 입고 갈 장소를 적어주세요"
              value={place}
              onChange={pChangeHandler}
            />
          </Form>
        </FormBox>
        <SubjectText>허, 불허?</SubjectText>
      </ContentBox>
      <ButtonBox>
        <PublicButton
          onClick={() => {
            PostVotes(privateAxios, place, clothes);
            navigate(
              `/votecomplete/${clothes}/${place.length > 0 ? place : '학교'}`,
            );
          }}
          text="투표 만들기"
          isDisabled={clothes.length > 0 ? 0 : 1}
        />
      </ButtonBox>
    </StyledRoot>
  );
}

export default Vote;
