import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { crudReducer } from "./crudReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    crud: crudReducer
})