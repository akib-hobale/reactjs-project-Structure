import Axios from "axios";

import { GET_USER } from "../constants/user.constant";

export const getUser = () => {
  return async dispatch => {
    let { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: GET_USER, payload: data });
  };
};
