const twilio = require("twilio");

const client = new twilio(
  process.env.VITE_TWILIO_ACCOUNT_SID,
  process.env.VITE_TWILIO_AUTH_TOKEN
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

  if (!phoneNumber) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Phone number is required" }),
    };
  }

  try {
    // Generate a random 6-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    localStorage.setItem("otp", otp);

    // Send OTP via Twilio SMS
    const message = await client.messages.create({
      body: `Your OTP code is ${otp}`,
      to: phoneNumber,
      from: "+923150785967",
    });

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
