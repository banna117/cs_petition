import { useEffect } from "react"
import "./LoginnedForm.scss"

export default function LoginnedForm({currentUser, logout}){

    useEffect(()=>{
        console.log("i am here")
    }, [currentUser])
    return(
    <div className="form-idcard">
        <div className="idcard-top">
            <div className="user-img"></div>
            <div className="user-info">
                <div className="username">{currentUser.name}</div>
                <div className="usermajor">{currentUser.major}</div>
            </div>
        </div>
        <div className="idcard-bottom">
            <button className="logout-btn" onClick={()=>logout()}>logout</button>
        </div>
    </div>)

}