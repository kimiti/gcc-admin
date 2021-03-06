import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialUserState = {
  currentUser: null,
};
const user_reducer = (state = initialUserState, action) => {
  console.log(">>>>>" + initialUserState.currentUser);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
});

export default rootReducer;
