import React from "react";
import { IntlContext } from "../IntlContext";
import styled from "styled-components";

const SButton = styled.button`

    height: 30px;
    width:40%
    background: #FF4747;
    border: 0;
    margin: 3px;
    border-radius: 3px;
    font-size: 14px;
    line-height:44px;
    text-transform: uppercase;
    color:#fff;
    padding:0;
    font-weight:400;
`;

const LanguageSwitch = () => {
  const { switchToEnglish, switchToKorean } = React.useContext(IntlContext);
  return (
    <>
      <SButton onClick={switchToEnglish}>English</SButton>
      <SButton onClick={switchToKorean}>한국어</SButton>
    </>
  );
};


export default LanguageSwitch;
