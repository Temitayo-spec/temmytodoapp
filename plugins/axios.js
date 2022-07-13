/* eslint-disable linebreak-style */
import axios from "axios";
import router from "next/router";
import { setError, setGlobalLoading } from "../store/auth";
import reduxStore from "../store";
import { decodeCelebrate } from "../utils/functions";

// AXIOS CONFIGURATIONS
const configureAxios = () => {
  // BASE URL
  axios.defaults.baseURL = "https://learnovate-api.herokuapp.com/api/v1/";
  const { dispatch } = reduxStore;

  // INTERCEPT REQUESTS AND ERRORS
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${reduxStore.getState().auth.token}`;
    dispatch(setError(null));
    dispatch(setGlobalLoading(true));
    return config;
  });

  // INTERCEPT RESPONSES
  axios.interceptors.response.use(
    (response) => {
      dispatch(setGlobalLoading(false));
      return response;
    },
    (responseError) => {
      const { data, status } = responseError.response;
      // console.log('ERROR_STATUS', status)
      if (status === 401) {
        router.push("/login?error=token expired");
      }
      dispatch(setGlobalLoading(false));
      dispatch(setError(decodeCelebrate(data)));
    }
  );
};

export default configureAxios;
