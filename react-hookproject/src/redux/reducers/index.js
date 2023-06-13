import {combineReducers} from "redux"
import categoryListReducer from "./categoryListReducer";
import saveCategoryReducer from "./saveCategoryReducer";
import changeCategoryReducer from "./changeCategoryReducer";
const rootReducer = combineReducers({
    categoryListReducer,
    saveCategoryReducer,
    changeCategoryReducer
})

export default rootReducer;