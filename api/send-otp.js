const twilio = require("twilio");

// Initialize Twilio client with environment variables
const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID, // Use process.env in Node.js for environment variables
  process.env.TWILIO_AUTH_TOKEN
);

module.exports.handler = async (event, context) => {
  // Check if request is POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  const { phoneNumber } = JSON.parse(event.body);

  // Ensure phone number is provided
  if (!phoneNumber) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Phone number is required" }),
    };
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

    // Store OTP (in a session or other secure storage mechanism)
    // In production, use a secure session or database, not in-memory
    // For Netlify functions, using a database or a service like Redis would be ideal

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "OTP sent successfully",
        sid: message.sid,
      }),
    };
  } catch (error) {
    console.error("Error sending OTP:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to send OTP",
        error: error.message,
      }),
    };
  }
};
