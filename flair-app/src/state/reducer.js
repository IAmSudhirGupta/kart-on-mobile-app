import {LOGOUT, LOGIN} from './action';

const initialState = {
  isLoggedIn: false,
  data: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        data: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        data: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
