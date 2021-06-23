import React from "react";
import Top3Petition from "../Component/Top3Petition"



class HomePage extends React.Component {
    render() {
        return (
            <div className="home_display">
                <img className="home_banner" src = './banner.png' alt="배너입니다." />
                <div className="home_top3">
                    <Top3Petition/>
                </div>
            </div>
        );
    }
}

export default HomePage;