const express = require("express");
const axios = require("axios");
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    console.log("API called: Starting POST request...");

    console.log("Parsing request body...");
    const { description , userInput, chatHistory } = req.body;
    console.log("Request body parsed:", { userInput, chatHistory });

    console.log("Fetching README content from GitHub...");

    const combinedInput = `\n\nUser's Question: ${userInput}`;

    console.log("Generating chat completion...");
    const chatCompletion = await getGroqChatCompletion(
      combinedInput,
      chatHistory
    );
    const assistantResponse = chatCompletion.choices[0]?.message?.content || "";
    console.log("Chat completion generated:", { assistantResponse });

    console.log("Returning assistant response...");
    return res.status(200).json({ assistantResponse });
  } catch (error) {
    console.error("Error in API route:", error);

    console.error("Error stack trace:", error.stack);

    return res.status(500).json({ error: "Something went wrong." });
  }
});

async function getGroqChatCompletion(combinedInput, chatHistory) {
  try {
    const messages = [
      ...chatHistory,
      {
        role: "system",
        content: `You are an intelligent research assistant designed to answer questions related to research papers. Your focus is on reading and understanding the contents of academic papers and addressing user queries in a clear, concise, and informative manner. When responding, refer to relevant sections of the paper to explain key concepts and findings. Break down complex research topics into easy-to-understand explanations, ensuring the user grasps the core ideas. Your tone should be informative but approachable, helping users navigate through the technical aspects of the paper. Provide short, crisp, and direct answers, keeping responses around 175 words, and offering precise guidance for solving doubts related to the paper's content.Give 2 line answers`,
      },
      {
        role: "user",
        content: combinedInput,
      },
    ];

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: messages,
    });

    return response;
  } catch (error) {
    console.error("Error in Groq chat completion:", error);
    throw new Error("Failed to generate chat completion");
  }
}

module.exports = router;
