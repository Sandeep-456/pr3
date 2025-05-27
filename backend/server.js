const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

const N8N_WEBHOOK_URL = "https://sandeep456.app.n8n.cloud/webhook/submit";

app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  console.log("Received lead:", { name, email, company, message });

  try {
    await axios.post(N8N_WEBHOOK_URL, {
      name,
      email,
      company,
      message,
    });

    res.json({ message: "Lead submitted successfully and sent to n8n!" });
  } catch (error) {
    console.error("Error sending data to n8n:", error.message);
    res.status(500).json({ message: "Failed to send lead to n8n." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
