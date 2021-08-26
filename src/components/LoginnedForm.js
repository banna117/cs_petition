import "./LoginnedForm.scss"

export default function LoginnedForm({userName, userMajor, setUserMajor, setUserName}){

    function logout(){
        setUserMajor("");
        setUserName("");
    }
    return(
    <div className="form-idcard">
        <div className="idcard-top">
            <div className="user-img"></div>
            <div className="user-info">
                <div className="username">{userName}</div>
                <div className="usermajor">{userMajor}</div>
            </div>
        </div>
        <div className="idcard-bottom">
            <button className="logout-btn" onClick={()=>logout()}>logout</button>
        </div>
    </div>)

}