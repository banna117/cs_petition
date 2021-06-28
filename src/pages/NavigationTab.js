import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./NavigationTab.scss";
import axios from "axios";

export default function NavigationTab() {
	return (
		<div className="tab">
			<h1 className="logo-spot">로고 들어올 자리</h1>
			<div className="links">
				<Link to="/home">
					<button className="tab-home">홈</button>
				</Link>

				<Link to="/petition">
					<button className="tab-petition">게시글 목록</button>
				</Link>

				<Link to="/DM">
					<button className="tab-dm">개발자 소개/문의</button>
				</Link>
			</div>

			<h5>로그인</h5>
		</div>
	);
}
