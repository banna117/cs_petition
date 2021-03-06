import React, {useEffect, useState} from "react";

import "./HomePage.scss";
import Logo1 from "../assets/icons/LOGO1"


export default function HomePage() {
    //variables
    const [name, setName] = useState("");
    const [major, setMajor] = useState("")
    //state
    useEffect(()=>{
        const btn = document.getElementById("login-complete-btn")
        if(name && major){btn.disabled=false}
        else{btn.disabled="disabled"}
    })


    return (
        <div className="home">
            <div className="main-column">
                <div className="hp-nameinput">
                    <div className="hp-logo">
                        <Logo1 />
                    </div>
                    <div className="hp-input">
                        <input className="input-name" type="text" placeholder="Type your Name" onChange={(e)=>setName(e.target.value)}/>
                        <input className="input-major" type="text" placeholder="Type your Major" list="major-list" onChange={(e)=>setMajor(e.target.value)} />
                        <datalist id="major-list">
                            <option value="건환" />
                            <option value="전산" />
                            <option value="전전" />
                            <option value="산디" />
                            <option value="원양" />
                            <option value="신소재" />
                            <option value="생화공" />
                            <option value="항공" />
                            <option value="산업공학" />
                            <option value="기계" />
                            <option value="자연" />
                        </datalist>
                    </div>
                    <div className="hp-login">
                        <button className="login-button" id="login-complete-btn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


