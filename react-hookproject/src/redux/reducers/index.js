import {combineReducers} from "redux"
import categoryListReducer from "./categoryListReducer";
import saveCategoryReducer from "./saveCategoryReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import noteListReducer from "./noteListReducer";
import saveNoteReducer from "./saveNoteReducer";
const rootReducer = combineReducers({
    categoryListReducer,
    saveCategoryReducer,
    changeCategoryReducer,
    noteListReducer,
    saveNoteReducer
})

export default rootReducer;