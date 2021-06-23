import React from "react";
import { Link } from "react-router-dom";
import "../HomePage.css";


class NavigationTab extends React.Component {
    render() {
        return (
            <div className="Tab">
                <h1 className = "logo_spot">로고 들어올 자리</h1>
                <div className="links">
                    <Link to='/home'>
                        <button className = "button_home">홈</button>
                    </Link>

                    <Link to="/petition">
                        <button className = "button_petition">게시글 목록</button>
                    </Link>

                    <Link to="/DM">
                        <button className = "button_DM">개발자 
                        소개/문의</button>
                    </Link>
                </div>

                <h5>로그인</h5>
            </div >
        );
    }
};

export default NavigationTab;