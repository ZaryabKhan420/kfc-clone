module.exports = async (req, res) => {
  // Check if request is POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { phoneNumber, otp } = req.body;

  // Ensure phone number and OTP are provided
  if (!phoneNumber || !otp) {
    return res
      .status(400)
      .json({ message: "Phone number and OTP are required" });
  }

  try {
    // Retrieve the OTP sent to the user (for demo purposes, we are using memory)
    const savedOtp = req.session.otp;

    // Compare OTPs
    if (savedOtp === otp) {
      return res.status(200).json({ message: "OTP verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res
      .status(500)
      .json({ message: "Failed to verify OTP", error: error.message });
  }
};
