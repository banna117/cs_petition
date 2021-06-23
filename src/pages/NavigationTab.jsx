import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import PetitionPage from "./PetitionPage";
import DirectMessagePage from "./DirectMessagePage";

class NavigationTab extends React.Component{
    render(){
       return (
            <head className="Tab">
                <h1>로고 들어올 자리</h1>
                    <body>
                    <Link to ='/home'>
                        <button1>홈</button1>
                    </Link>
                  
                    <Link to = "/petition">
                        <button2>게시글 목록</button2>
                    </Link>
                    
                    <Link to = "/DM">
                        <button3>개발자 소개/문의</button3>
                    </Link>
                    </body>

                <h5>로그인</h5>
            </head >
        );
    }
};

export default NavigationTab;