/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { colors } from 'styles/styleOptions';
import { PngBear } from 'utils';
import { LocalBtn, ShareBtn, RecBtn } from 'assets';
import { StyledRoot, OverBear, Options, OptionsSection } from './style';
import ClothRec from './Cloth';
import Share from './Share';

function BearOptions() {
  const [showCloth, setShowCloth] = useState(false);
  const [showShareModal, setshowShareModal] = useState(false);

  return (
    <StyledRoot>
      <OverBear />
      {!showCloth && (
        <OptionsSection>
          <Options onClick={PngBear}>
            <img src={LocalBtn} alt="LocalBtn" />
          </Options>
          <Options
            onClick={() => {
              setshowShareModal(!showShareModal);
            }}
            color={colors.blue}
          >
            <img src={ShareBtn} alt="ShareBtn" />
          </Options>
          <Options
            onClick={() => {
              setShowCloth(!showCloth);
            }}
          >
            <img src={RecBtn} alt="RecBtn" />
          </Options>
        </OptionsSection>
      )}
      {showCloth && <ClothRec />}
      {showShareModal && (
        <Share
          handle={() => {
            setshowShareModal(!showShareModal);
          }}
        />
      )}
    </StyledRoot>
  );
}

export default BearOptions;
