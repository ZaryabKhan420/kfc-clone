import axios from "axios";

// API to send OTP
export const sendOtp = async (phoneNumber) => {
  try {
    const response = await axios.post("/api/send-otp", { phoneNumber });
    return response.data; // Return the response data from the server
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error; // Propagate error to be handled in the component
  }
};

// API to verify OTP
export const verifyOtp = async (phoneNumber, otp) => {
  try {
    const response = await axios.post("/api/verify-otp", { phoneNumber, otp });
    return response.data; // Return the response data from the server
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error; // Propagate error to be handled in the component
  }
};
