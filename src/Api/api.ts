import axios from "axios";

// axios.defaults.baseURL = "http://127.0.0.1:4010/api/373.8629058634638/programs";
const API_BASE_URL = 'http://127.0.0.1:4010';

export const Formdata = async (programId: any) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/847.980637706918/programs/assumenda/application-form`);
    return response.data;
  } catch (error) {
    console.error('Error fetching form data:', error);
    throw error;
  }
};
