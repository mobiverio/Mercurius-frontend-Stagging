import axios from "axios";
// import notifySuccess from "../components/toast/notifySuccess";
import notifyError from "../components/toast/notifyError";

const baseUrl = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  baseURL: "https://api.mercurius.ng/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (vals) => {
  const {
    name,
    email,
    date_of_birth,
    address,
    password,
    password_confirmation,
    phone,
    zip_code,
    city,
  } = vals;
  try {
    const res = await api.post(
      "/register",
      JSON.stringify({
        name,
        email,
        date_of_birth,
        address,
        password,
        password_confirmation,
        phone,
        zip_code,
        city,
      })
    );

    return res;
  } catch (err) {
    console.error(err);
  }
};

export const loginUser = async (vals) => {
  try {
    const res = await api.post("/login", { ...vals });
    if (res?.data?.status) {
      const { access_token, ...restOfData } = res?.data;
      sessionStorage.setItem("accessToken", access_token);
      sessionStorage.setItem("loggedInUser", JSON.stringify(restOfData?.user));
    }
    console.log(res?.data, "action payload");
    return res;
  } catch (err) {
    console.log(err);
    notifyError(err.message);
  }
};

export const getProducts = async () => {
  try {
    const response = await baseUrl.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const getProductsLimited = async () => {
  try {
    const response = await baseUrl.get("/products?limit=9");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getSingleProduct = async (productId) => {
  try {
    const response = await baseUrl.get(`/products/${productId}`); // Use productId parameter in the URL
    return response.data;
  } catch (error) {
    console.error("Error fetching single product:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await baseUrl.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Add more API methods as needed

export default api;
