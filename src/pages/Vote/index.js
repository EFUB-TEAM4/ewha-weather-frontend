/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WhiteLeft } from 'assets';
import { HeaderIcon, PublicButton } from 'components';
import {
  StyledRoot,
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
  const navigate = useNavigate();
  return (
    <StyledRoot>
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
      <ContentBox>
        <FormBox>
          <SubjectText>
            오늘 이 옷<span>*</span>
          </SubjectText>
          <Form>
            <input
              type="text"
              name="clothes"
              placeholder="입고싶은 옷을 적어주세요"
              required="required"
            />
          </Form>
        </FormBox>
        <FormBox>
          <SubjectText>어디에서</SubjectText>
          <Form>
            <input
              type="text"
              name="place"
              placeholder="옷을 입고 갈 장소를 적어주세요"
            />
          </Form>
        </FormBox>
        <SubjectText>허, 불허?</SubjectText>
      </ContentBox>
      <ButtonBox>
        <PublicButton text="투표 만들기" />
      </ButtonBox>
    </StyledRoot>
  );
}

export default Vote;
