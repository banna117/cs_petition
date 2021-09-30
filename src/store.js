import { createStore } from "redux";
import rootReducer from "./reducer";

let preloadedState;

if(sessionStorage.getItem('user_uid') !== null){

    preloadedState = {loginned:{loginned:true, 
                        currentUser:
                        {uid:sessionStorage.getItem('user_uid'), 
                        name:sessionStorage.getItem('user_name'), 
                        major:sessionStorage.getItem('user_major')}}};

}
const store = createStore(rootReducer, preloadedState);

export default store;