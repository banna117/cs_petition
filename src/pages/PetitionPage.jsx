import React from "react"
import "../PetitionPage.css"
import "../Component/listedPetition"

class PetitionPage extends React.Component{
    render(){
        return(
            <div className="petition">

                <div className="petition_input">
                    <button className="petition_filter">필터</button>
                    <form> <input className="petition_filter_input" type="text"/> </form>
                    <button className="petition_write">작성하기</button>
                </div>
                <div className="petition_petitionlist">
                    <listedPetition />
                </div>
                    

            </div>
        );
    }
}
export default PetitionPage;