import "./LoginnedForm.scss"
import { setLoginned } from "../features/login/loginnedSlice";

export default function LoginnedForm({store}){
	//로그아웃 완료
	const logout = ()=> {
		//currentUser 리셋 후 스토리지 데이터 없애기
		sessionStorage.removeItem('user_uid');
		sessionStorage.removeItem('user_name');
		sessionStorage.removeItem('user_major');
		store.dispatch(setLoginned({loginned:false, currentUser:""}));
	 }

    return(
    <div className="form-idcard">
        <div className="idcard-top">
            <div className="user-img"></div>
            <div className="user-info">
                <div className="username">{store.getState().loginned.currentUser.name}</div>
                <div className="usermajor">{store.getState().loginned.currentUser.major}</div>
            </div>
        </div>
        <div className="idcard-bottom">
            <button className="logout-btn" onClick={()=>logout()}>logout</button>
        </div>
    </div>)

}