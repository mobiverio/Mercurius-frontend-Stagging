import axios from "axios";
import notifySuccess from "../components/toast/notifySuccess";
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
    notifySuccess("Account Created Successfully");
    return res;
  } catch (err) {
    console.error(err);
    notifyError("Account creation failed");
  }
};

export const loginUser = async (vals) => {
  try {
    const res = await api.post("/login", { ...vals });
    if (res?.data?.status) {
      const { access_token, ...restOfData } = res?.data;
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("loggedInUser", JSON.stringify(restOfData?.user));
    }
    console.log(res?.data, "action payload");
    return res;
  } catch (err) {
    if (!err) {
      notifyError("Failed to connect to server");
    } else if (err.response.status === 401) {
      notifyError("Email or password Incorrect");
    }
    notifyError("Login failed");
  }
};

export const updateProfile = async (vals) => {
  try {
    const res = await api.put(`/editProfile/${vals?.id}`, vals, {
      headers: { Authorization: `Bearer ${vals?.token}` },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updatePassword = async (vals) => {
  try {
    const res = await api.post("/change-password", vals, {
      headers: { Authorization: `Bearer ${vals.token}` },
    });

    return res;
  } catch (err) {
    if (err?.response?.status === 422) {
      notifyError("Password must be at least 6 characters");
    }
    if (err?.response?.status === 401) {
      notifyError(err.response?.data?.error);
      // console.log("Please login");
    }
    console.log(err);
  }
};

// const response = await axios.patch(
//   `/api/users/${userId}`,
//   formData,
//   {
//     headers: { Authorization: `Bearer ${token}` },
//   }
// );

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

// export default api;
