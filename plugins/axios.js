import axios from "axios";
import { updateEmail, updateError, updateSuccess, updateStart } from "../store/postSlice";

export const postEmail = async (email, dispatch) => {
  dispatch(updateStart());
  try {
    const response = await axios.post(
      "https://learnovate-api.herokuapp.com/api/v1/extra/notify/get_notified",
      email
    );
    dispatch(updateSuccess(response.data));
  } catch (error) {
    dispatch(updateError(error));
  }
};
