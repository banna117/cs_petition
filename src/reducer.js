import { combineReducers } from "redux";
import categoryReducer from "./features/category/categorySlice";
import loginnedReducer from "./features/login/loginnedSlice";

const rootReducer = combineReducers({
    category: categoryReducer,
    loginned: loginnedReducer
})

export default rootReducer;