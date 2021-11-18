import React from "react";
import NavigatorHeader from "./NavigatorHeader";
import TitleHeader from "./TitleHeader";

const HeaderMainPage = (props) => {
  return (
    <header className="header--main-page">
      <NavigatorHeader />
      <TitleHeader />
    </header>
  );
};

export default HeaderMainPage;
