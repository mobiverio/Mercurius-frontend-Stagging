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
  // baseURL: "https://api.mercurius.ng/api/v1",
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
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    notifySuccess("Account Created Successfully");
    return res;
  } catch (err) {
    if (!err?.response) {
      notifyError("Network error || Failed to connect to server");
    } else if (err?.response?.status === 422) {
      notifyError("Email already exists");
    } else {
      notifyError("Registration failed failed");
    }

    console.log(err, "The Error");
    return err;
  }
};

export const loginUser = async (vals) => {
  try {
    const { email, password } = vals;
    const res = await api.post("/login", JSON.stringify({ email, password }), {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    });

    localStorage.setItem("loggedInUser", JSON.stringify(res?.data?.user));
    localStorage.setItem("token", res?.data?.access_token);

    // console.log(res?.data, "action payload");
    return res;
  } catch (err) {
    if (!err?.res) {
      notifyError("No server response");
    } else if (err?.response?.status === 400) {
      notifyError("User Credentials not found");
    } else if (err?.response?.status === 401) {
      notifyError("Email or password Incorrect");
    } else notifyError("Login failed");
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
    const response = await api.get("/products");
    console.log(response.data.data);
    return response?.data?.data;
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
