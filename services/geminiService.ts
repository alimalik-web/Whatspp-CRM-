
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCampaignContent = async (objective: string, audience: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Create a highly engaging WhatsApp Marketing Template for the following objective: ${objective}. Target Audience: ${audience}. 
      Return the output as a JSON object with: 
      - templateName: A short descriptive name (uppercase with underscores)
      - body: The main message text with placeholders like {{1}}, {{2}} for personalization.
      - footer: A short footer text.
      - buttons: An array of up to 3 call-to-action strings.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            templateName: { type: Type.STRING },
            body: { type: Type.STRING },
            footer: { type: Type.STRING },
            buttons: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["templateName", "body", "footer", "buttons"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

export const suggestReplies = async (customerMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The customer said: "${customerMessage}". Suggest 3 professional and helpful replies for a business. Keep them concise.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    return [];
  }
};
