import axios from "axios";
import {baseUrl, GET_INFO, INFO_ERROR} from "./";

export const infoError = (error) => {
  return {
    type: INFO_ERROR,
    payload: error
  };
};

export const getInfo = () => {
  return dispatch => {
    return axios.get(`${baseUrl}/info`)
      .then(response => {
        dispatch({
          type: GET_INFO,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        dispatch(infoError('error.info.failed'));
      });
  };
};