import Axios from "axios";
import {
  CASE_LIST_SUCCESS,
  CASE_LIST_REQUEST,
  CASE_LIST_FAIL,
} from "../types/caseTypes";

export const listCases = () => async (dispatch) => {
  dispatch({
    type: CASE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("http://localhost:5000/api/v1/employees");
    dispatch({ type: CASE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CASE_LIST_FAIL, payload: error.message });
  }
};
