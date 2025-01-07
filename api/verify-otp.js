module.exports.handler = async (event, context) => {
  // Check if request is POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  const { phoneNumber, otp } = JSON.parse(event.body);

  // Ensure phone number and OTP are provided
  if (!phoneNumber || !otp) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Phone number and OTP are required",
      }),
    };
  }

  try {
    // Retrieve OTP (for demo purposes, this should be replaced with secure storage)
    const savedOtp = process.env.SAVED_OTP || ""; // For production, store OTP securely (e.g., database)

    // Compare OTPs
    if (savedOtp === otp) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "OTP verified successfully" }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid OTP" }),
      };
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to verify OTP",
        error: error.message,
      }),
    };
  }
};
