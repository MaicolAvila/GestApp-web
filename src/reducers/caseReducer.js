import {
  CASE_LIST_SUCCESS,
  CASE_LIST_REQUEST,
  CASE_LIST_FAIL,
} from "../types/caseTypes";

export const caseListReducer = (
  state = { loading: true, cases: [] },
  action
) => {
  switch (action.type) {
    case CASE_LIST_SUCCESS:
      return { loading: false, cases: action.payload };
    case CASE_LIST_REQUEST:
      return { loading: true };
    case CASE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
