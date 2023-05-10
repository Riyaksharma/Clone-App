import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/user/products`);
    console.log(data);

    dispatch({ type: "success", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "fail", payload: error });
  }
};
