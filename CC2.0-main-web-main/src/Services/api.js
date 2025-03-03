
import axios from "axios";

const API_URL = "http://localhost:5000/api"; // ✅ Ensure this matches the backend

export const registerTeam = async (teamData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, teamData);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering team:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};
