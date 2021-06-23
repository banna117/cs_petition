import React from "react";
import Top3Petition from "../Component/Top3Petition";
import bannerImg from "./banner.png";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home_display">
        <img className="home_banner" src={bannerImg} alt="배너입니다." />
        <div className="home_top3">
          <Top3Petition />
        </div>
      </div>
    );
  }
}

export default HomePage;
