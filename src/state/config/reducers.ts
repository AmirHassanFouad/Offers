import { combineReducers } from "@reduxjs/toolkit";
import offersReducer from "../modules/offers/slice";

const rootReducer = combineReducers({ offers: offersReducer });

export default rootReducer;
