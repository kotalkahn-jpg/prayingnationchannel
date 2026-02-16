export async function sendSMS(phoneNumbers: string[], message: string) {
  try {
    const response = await fetch(
      `https://api.textbee.dev/api/v1/gateway/devices/${process.env.TEXTBEE_DEVICE_ID}/send-sms`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.TEXTBEE_API_KEY!,
        },
        body: JSON.stringify({
          recipients: phoneNumbers,
          message,
        }),
      }
    );

    const data = await response.json();
    console.log("TextBee response:", data);

  } catch (error) {
    console.error("SMS error:", error);
  }
}
