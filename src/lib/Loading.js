// Loading.js
import React from "react";
import { Background } from "./Styles";
import { useEffect } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Background>
      <img
        src={process.env.PUBLIC_URL + "/asset/loading-spinner.gif"}
        alt="로딩 중"
        width="10%"
      />
    </Background>
  );
};
