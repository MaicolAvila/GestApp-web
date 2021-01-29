import {
    PAY_LIST_SUCCESS,
    PAY_LIST_REQUEST,
    PAY_LIST_FAIL,
  } from "../types/payTypes";
  
  export const payListReducer = (
    state = { loading: true, payments: [] },
    action
  ) => {
    switch (action.type) {
      case PAY_LIST_SUCCESS:
        return { loading: false, payments: action.payload };
      case PAY_LIST_REQUEST:
        return { loading: true };
      case PAY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  