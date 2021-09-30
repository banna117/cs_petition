const initialState = {currentUser:""}

//Action
export const currentUser = "currentUser/modifyCurrentUser"

//Action Creator
export const setCurrentUser = (user) => {
    return{
        type:currentUser,
        payload: user
    }
}

export default function currentUserReducer(state=initialState, action){
    switch(action.type){
        case currentUser:{
            return {...state, currentUser:action.payload}
        }
        default:return state;
    }
}