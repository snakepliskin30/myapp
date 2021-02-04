import types from "../typeConstants";

function AccountReducers(state = {}, action) {
  switch (action.type) {
    case types.FETCH_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
}

export default AccountReducers;
