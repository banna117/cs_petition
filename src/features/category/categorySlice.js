
const initialState = {filter: -1};

//Action
export const category = "category/modifyCategory";

//Action creator
export const modifyCategory = (filterNum) => {
    return {
        type:category,
        payload: filterNum
    }
}

export default function categoryReducer(state = initialState, action){
    switch(action.type){
        case category:{
            return {...state, filter:action.payload}
        }
        default:{
            return state;
        }
    }

}






// import {createSlice} from "@reduxjs/toolkit"

// export const categorySlice = createSlice({
//     name: "category",
//     initialState: {
//         category: 0
//     },
//     reducers:{
//         modifyCategory: (state, action) => state.category = action.payload
//     }
// })

// export const {modifyCategory} = categorySlice.actions;
// export default categorySlice.reducer