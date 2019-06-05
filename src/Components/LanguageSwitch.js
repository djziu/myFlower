import React from "react";
import { IntlContext } from "../IntlContext";

const LanguageSwitch = () => {
  const { switchToEnglish, switchToKorean } = React.useContext(IntlContext);
  return (
    <>
      <button onClick={switchToEnglish}>English</button>
      <button onClick={switchToKorean}>Korean</button>
    </>
  );
};


export default LanguageSwitch;
