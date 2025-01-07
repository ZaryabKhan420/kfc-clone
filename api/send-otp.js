const twilio = require("twilio");

// Initialize Twilio client with environment variables
const client = new twilio(
  import.meta.env.TWILIO_ACCOUNT_SID,
  import.meta.env.TWILIO_AUTH_TOKEN
);

module.exports = async (req, res) => {
  // Check if request is POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { phoneNumber } = req.body;

  // Ensure phone number is provided
  if (!phoneNumber) {
    return res.status(400).json({ message: "Phone number is required" });
  }

  try {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Send OTP via Twilio SMS
    const message = await client.messages.create({
      body: `Your OTP code is ${otp}`,
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
    });

    // Save OTP (for demo purposes, save OTP in memory; for production, save it securely)
    // You can store OTP in a database or cache to verify later
    req.session.otp = otp;

    return res
      .status(200)
      .json({ message: "OTP sent successfully", sid: message.sid });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return res
      .status(500)
      .json({ message: "Failed to send OTP", error: error.message });
  }
};
