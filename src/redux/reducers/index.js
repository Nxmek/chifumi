import { combineReducers } from "redux";
import signUpReducer from "./sign-up.reducer";

const finalReducer = combineReducers({ signUpReducer: signUpReducer });

export default finalReducer;
