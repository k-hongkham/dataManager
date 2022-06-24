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

export async function getMe(token) {
  try {
    const { data } = await axios.get("/api/users/me", {
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

export async function loginUser(email, password) {
  try {
    const { data } = await axios.post(`/api/users/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error.response.data;
  }
}

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

export async function getAllUsers(token) {
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
}
