
//
const initialState = {loginned:false, currentUser:""}

//Action
export const loginned = "login/loginned";

//Action creator
//set Loginned to payload value
export function setLoginned (loginnedState) {
    return {
        type: loginned,
        payload: loginnedState
    }
}

export default function loginnedReducer(state= initialState, action) {
    switch (action.type){
        case loginned:{
            return {
                ...state,
                loginned: action.payload.loginned,
                currentUser: action.payload.currentUser
            }
        }

        default:return state;
    }

}

