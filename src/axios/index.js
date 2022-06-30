import axios from "axios";

export async function getAPIHealth() {
  try {
    const { data } = await axios.get("/api/health");
    return data;
  } catch (error) {
    console.error(error);
    return { healthy: false };
  }
}

export const getMe = async (token) => {
  try {
    const { data } = await axios.get("/api/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("what data get me", data);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (email, password) => {
  try {
    const { data } = await axios.post(`/api/users/login`, {
      email,
      password,
    });

    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export async function getUserByEmail(token, email) {
  try {
    const { data } = await axios.get(`/api/users/${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    throw error.response.data;
  }
}

export const getAllUsers = async (token) => {
  try {
    const { data } = await axios.get(`/api/users/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllCustomers = async (token) => {
  try {
    const { data } = await axios.get(`/api/customers/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("attempting to get all customers from axios", data);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerUser = async (
  email,
  password,
  firstName,
  lastName,
  department
) => {
  try {
    const { data } = await axios.post("/api/users/register", {
      email,
      password,
      firstName,
      lastName,
      department,
    });
    console.log("attempting to register", data);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
