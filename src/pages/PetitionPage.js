import React from "react"
import "./PetitionPage.css"
import ListedPetition from "../components/ListedPetition"

class PetitionPage extends React.Component {
    render() {
        return (
            <div className="petition">
                <div className="input">
                    <button className="filter">필터</button>
                    <form> <input className="filter_input" type="text" /> </form>
                    <button className="write">작성하기</button>
                </div>
                <div className="petitionlist">
                    <ListedPetition/>
                </div>
            </div>
        );
    }
}
export default PetitionPage;