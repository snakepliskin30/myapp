import types from "../typeConstants";
import accountAPI from "../../apis/accountapis";

export const fetchAccount = (id) => {
  return async function (dispatch) {
    const response = await accountAPI.get(`/accounts/${id}`);

    dispatch({
      type: types.FETCH_ACCOUNT,
      payload: response.data,
    });
  };
};
