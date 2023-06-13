import {combineReducers} from "redux"
import categoryListReducer from "./categoryListReducer";
import saveCategoryReducer from "./saveCategoryReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import noteListReducer from "./noteListReducer";
import saveNoteReducer from "./saveNoteReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
    categoryListReducer,
    saveCategoryReducer,
    changeCategoryReducer,
    noteListReducer,
    saveNoteReducer,
    userReducer
})

export default rootReducer;