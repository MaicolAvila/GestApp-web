import Axios from "axios";
import {
  PAY_LIST_SUCCESS,
  PAY_LIST_REQUEST,
  PAY_LIST_FAIL,
} from "../types/payTypes";

export const listPayments = () => async (dispatch) => {
  dispatch({
    type: PAY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("http://localhost:5000/api/v1/pay");
    dispatch({ type: PAY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PAY_LIST_FAIL, payload: error.message });
  }
};
