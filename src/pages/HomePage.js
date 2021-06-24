import React from "react";
import Top3Petition from "../components/Top3Petition";
import bannerImg from "../assets/img/banner.png";
import "./HomePage.css";


class HomePage extends React.Component {
  render() {
    return (
      <div className="home_display">
        <img className="banner" src={bannerImg} alt="배너입니다." />
        <div className="top3">
          <Top3Petition />
        </div>
      </div>
    );
  }
}

export default HomePage;
