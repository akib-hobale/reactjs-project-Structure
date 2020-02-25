import { GET_USER } from "../constants/user.constant";

const initializa = [];

const reducer = (state = initializa, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
